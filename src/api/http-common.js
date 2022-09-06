import axios from "axios";

export default axios.create({
  baseURL: "http://openapi.seoul.go.kr:8088",
  headers: {
    "Content-type": "application/json",
    // "Accept":"*/*"
  }
});