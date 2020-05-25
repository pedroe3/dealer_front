import axios from "axios";
const baseDomain = "http://localhost:8080";
const baseURL = `${baseDomain}`;

axios.defaults.headers.common['Content-Type'] = "application/json, text/plain, */*";
axios.defaults.headers.post['Content-Type'] = "application/json, text/plain, */*";
export default axios.create({
    baseURL
});
