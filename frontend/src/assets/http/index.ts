import type { AxiosInstance } from "axios";
import axios from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-type": "application/json",
    },
});

export default httpClient;
