import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 6,
    key: process.env.NEXT_PUBLIC_REACT_APP_KEY,
  },
});
