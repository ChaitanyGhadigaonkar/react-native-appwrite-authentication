import {createContext, useContext, useEffect, useState} from 'react';
import AppWriteService from '../appwrite/instance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [appwriteService, setAppwriteService] = useState(null);

  const handleLogin = async (email, password) => {
    const data = await appwriteService.login(email, password);
    return data;
  };

  const handleRegister = async (email, password, name) => {
    const data = await appwriteService.register(name, email, password);
    return data;
  };

  const getUserDetails = async () => {
    const data = await appwriteService.getCurrentUser();
    const {name, $id: userId, email} = data;

    setUser({name, userId, email});
    await AsyncStorage.setItem('user', JSON.stringify({name, userId, email}));
  };
  const handleLogout = async () => {
    const data = await appwriteService.logout();
    if (data) {
      setIsAuthenticated(false);
      await AsyncStorage.removeItem('isAuthenticated');
      Snackbar.show({
        text: 'Logout successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      console.log('Problem in logging out');
    }
  };

  useEffect(() => {
    if (!appwriteService) {
      setAppwriteService(new AppWriteService());
    }
  }, []);

  useEffect(() => {
    async function getAsyncStorageData() {
      setIsAuthenticated(
        (await AsyncStorage.getItem('isAuthenticated')) === 'true',
      );
      const userDetails = await AsyncStorage.getItem('user');
      setUser(userDetails !== null ? JSON.parse(userDetails) : null);
    }
    getAsyncStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        handleLogin,
        handleRegister,
        getUserDetails,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
export {AuthContextProvider, useAuthContext};
export default AuthContext;
