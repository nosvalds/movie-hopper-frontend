import axios from 'axios';

export default axios.create({
    baseURL: "http://homestead.test/api/",
    headers: {
        Accept: "application/json",
        //Authorization: "TBD" // Needs to be set up
    }
})