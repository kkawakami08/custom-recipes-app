import axios from "axios";

const nutritionixAPI = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2",
  headers: {
    "x-app-id": import.meta.env.VITE_NUTRITIONIX_APP_ID,
    "x-app-key": import.meta.env.VITE_NUTRITIONIX_API_KEY,
  },
});

export default nutritionixAPI;
