import axios from "axios"
const api = axios.create({
    baseURL: "http://120.77.82.124:8080/ele/"
})
api.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

export {
    api
}