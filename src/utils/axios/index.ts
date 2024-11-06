import axios from "axios";



export const ResilienceClient = axios.create({
    baseURL: "",
    headers: {
        Authorization: "",
    }
})