import axios from 'axios';

const Open = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export default Open;
