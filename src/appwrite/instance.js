import {ID, Account, Client} from 'appwrite';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT = process.env.APPWRITE_API_ENDPOINT;

const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;

class AppWriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);
    this.account = new Account(appwriteClient);
  }

  async register(name, email, password) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      return {success: true};
      console.log(user, 'registered successfully');
    } catch (err) {
      console.log('Appwerite Error :: register() :: ', err);
      return {success: false, error: err.message};
    }
  }

  async login(email, password) {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password,
      );
      return {success: true, user};
    } catch (err) {
      console.log('Appwerite Error :: login() :: ', err);
      return {success: false, error: err.message};
    }
  }

  async getCurrentUser() {
    try {
      const details = await this.account.get();
      return details;
      // { name : details.name, details.email, details.password}  user data
    } catch (err) {
      console.log('Appwerite Error :: getCurrentUser() :: ', err);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession('current');
      return true;
    } catch (err) {
      console.log('Appwerite Error :: logout() :: ', err);
      return null;
    }
  }
}

export default AppWriteService;
