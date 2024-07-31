
import axios from 'axios';
// const API_URL = `http://localhost:3000/api`;

interface UserData {
  username: string;
  email: string;
  password: string;
}

let usersDatabase: UserData[] = [];

export const createUser = async (userData: UserData) => {
  //Check If User Exist
  const existingUser = usersDatabase.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  try {
      //Create New User 
    let newUser = { ...userData, id: usersDatabase.length + 1 };
    usersDatabase.push(newUser);

    const response = await axios.post(`api/register`,userData) ;
    console.log(`User registration:`,usersDatabase,response.data);
    return response.data;
  } catch (error) {
    throw new Error('User registration failed');
  }
};



