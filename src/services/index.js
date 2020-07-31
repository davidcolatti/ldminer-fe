import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? //? (baseURL = 'here should be your production endpoint')
    (baseURL = window.location.origin)
  : (baseURL = "http://localhost:4000");
console.log(process.env.NODE_ENV, baseURL, "this is it");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  registerUser: async (user) => {
    return await service.post("/register", user);
  },
};

export default actions;
