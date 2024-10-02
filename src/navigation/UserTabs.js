import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import UserTab from '../tabs/UserTab';
import SettingsTab from '../tabs/SettingsTab';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

const UserTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="User"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'User') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tabs.Screen name="User" component={UserTab} />
        <Tabs.Screen name="Settings" component={SettingsTab} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default UserTabNavigator;
