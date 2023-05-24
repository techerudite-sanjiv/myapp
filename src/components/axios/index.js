import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify"
import { BASE_URL } from "./config";



const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",

    },
    withCredentials: false,
});

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

instance.interceptors.response.use(
    (response) => {
        if (response) {
            if (response.status === 200) {
                if (response.data.message && response.data.message.length && response.data.success) {
                    toast.success(response.data.message);
                }
                if (response.data.message && response.data.message.length && !response.data.success) {
                    toast.error(response.data.message);
                }
            }
        }
        return response;
        
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;








