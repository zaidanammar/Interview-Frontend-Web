import axios from "axios";

const BASE_URL = "https://screening.moduit.id/frontend/web/";

const Instance = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};

export default Instance;
