import http from "../../utils/api/http";
import Base from "./base";
import axios from "axios";
import { API_ENDPOINT } from "../../utils/api/endpoints";
import { LOGIN_API_KEY, LOGIN_SECRETE_KEY } from "../../utils/constants";

// User Repository
class User extends Base {
  me = async (url) => {
    return this.http(url, "get");
  };

  login = async (variables) => {
    return axios.post(API_ENDPOINT.LOGIN_URL, variables, {
      headers: {
        api_key: LOGIN_API_KEY,
        secret_key: LOGIN_SECRETE_KEY,
      },
    });
  };

  logout = async (url) => {
    return http.post(url);
  };
}

export default new User();
