import axios from "axios";

const randomUserApi = {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=30");
  }
};

export default randomUserApi;