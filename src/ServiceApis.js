import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
    baseURL: "http://192.168.43.230:8000"
});

// API.interceptors.request.use(
//     async (request) => {
//         if(await AsyncStorage.getItem('authToken')){
//             const token = JSON.parse(await AsyncStorage.getItem('authToken'));
//             request.headers.Authorization = `Bearer ${token}`;
//         }
//         return request;
//     }
// );


export const register = (registrationDetails) => API.post('http://192.168.43.230:8000/auth/signUp', registrationDetails);
export const login = (loginDetails) => API.post('/auth/signIn', loginDetails);

// const createItem = (item) => API.post("/memories/create", item);