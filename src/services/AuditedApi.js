import axios from 'axios';

const Audited = axios.create({
  baseURL: 'http://35.243.152.156:3201/api/'
});

export default Audited;
