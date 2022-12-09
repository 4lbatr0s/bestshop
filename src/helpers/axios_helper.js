import axios from "axios";
import { TEST_URL } from "./url_helper";

const BASE_URL = TEST_URL;

//INFO: HOW TO DYNAMICALLY GET ACCESSTOKEN WITH REDUX-PERSIST!
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken; //TIP: root: go to store and see key  value of the persistConfig. It's root! 


//INFO: How to create an axios 
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {
        token:`Bearer ${TOKEN}`
    }
})