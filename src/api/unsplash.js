import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Hv-xBnuD0qVH9m2cb0XlNH1Xu9WCCUCBGx6wQF79E4M",
  },
});
