import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? "https://hopper.developme.space/api/" : "http://homestead.test/api/",
  headers: {
    Accept: "application/json",
  }
})