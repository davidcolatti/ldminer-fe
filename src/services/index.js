import axios from "axios";

// Base URL is where the backend lives or it can be locally while in development
let baseURL = "https://leadminerbackend.herokuapp.com";

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  registerUser: async (user) => {
    return await service.post("/register", user);
  },
};

export default actions;
