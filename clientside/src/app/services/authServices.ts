
import axios from 'axios';
// const API_URL = `http://localhost:3000/api`;

interface UserData {
  username: string;
  email: string;
  password: string;
}


export const createUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`api/register`,userData) ;
    console.log(`User registration:`,userData,response.data);
    return response.data;
  } catch (error) {
    throw new Error('User registration failed');
  }
};

