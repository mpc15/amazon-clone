import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-clone-71a06.cloudfunctions.net/api",
  // "http://localhost:5001/clone-71a06/us-central1/api",
});

export default instance;
