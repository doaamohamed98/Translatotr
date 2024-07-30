
import axios from 'axios';
// const API_URL = `http://localhost:3000/api`;

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const createUser = async (Data:FormData) => {
  try {
    const response = await axios.post(`api/register`, Data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('User registration failed');
  }
};
