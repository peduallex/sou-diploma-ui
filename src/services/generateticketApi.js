import axios from 'axios';

const GenerateTicket = axios.create({
  baseURL: 'http://localhost:8000/api/'
});

export default GenerateTicket;
