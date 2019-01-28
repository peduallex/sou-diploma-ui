import axios from 'axios';

const PersonalData2 = axios.create({
  baseURL: 'http://localhost:8000/api/'
});

export default PersonalData2;
