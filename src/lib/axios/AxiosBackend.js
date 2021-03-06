import axios from 'axios';

let url =
    (process.env.REACT_APP_AXIOS === "development")
        ? "http://localhost.localdomain:3001/api/"
        : "/api/"



const AxiosBackend = axios.create({
    baseURL: url,
    timeout: 50000,
    headers: {
        authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`
    }
});

export default AxiosBackend