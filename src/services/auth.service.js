import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthService {
  token;
  isLogin;
  tokenName = "glova-token";

  signout() {
    return this.removeToken();
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  async getToken() {
    try {
      let result = await AsyncStorage.getItem(this.tokenName);

      if (result != null) {
        return result;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async setToken(token) {
    try {
      await AsyncStorage.setItem(this.tokenName, token);
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async removeToken() {
    if (typeof window !== "undefined") {
      await AsyncStorage.removeItem(this.tokenName);
    }
    return true;
  }
}

export default new AuthService();
