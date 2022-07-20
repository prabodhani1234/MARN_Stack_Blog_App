import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://prabodhanitravelblog.herokuapp.com/api/"
});