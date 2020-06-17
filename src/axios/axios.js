import axios from 'axios';

export default axios.create({
  baseURL: "https://hopper.developme.space/api/",
  headers: {
    Accept: "application/json",
    // Authorization: "TBD" // Needs to be set up
  }
})