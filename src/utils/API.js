import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

const API = {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};

export default API;
