
import axios from 'axios';
// const API_URL = `http://localhost:3000/api`;

interface UserData {
  username: string;
  email: string;
  password: string;
}

let usersDatabase: UserData[] = [];
let idnum=1

export const createUser = async (userData: UserData) => {
  //Check If User Exist
  const existingUser = usersDatabase.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  try {
      //Create New User 
    let newUser = { ...userData, id:idnum++ };
    usersDatabase.push(newUser);
    console.log(usersDatabase)
    const req = await axios.post(`/sign-up`,userData) ;
    console.log(`User registration:`,req.status);
    return req.status;
  } catch (error) {
    throw new Error('User registration failed');
  }
};

export const loginUser = async (email: string, password: string)=>{

  try{
    const res = await axios.post(`/sign-in`,{email,password});
    const user = usersDatabase.find(user => user.email === email);
    if(!user || user.password !== password){
      return { success: false, message: 'Invalid email or password'};
    }

    // if(user.password !== password){ 
    //   return { success: false, message: 'Invalid email or password' }
    // }
     return {success:true ,message:' Login is successful' }

  }catch(error){
   console.log(error)
  }



};



export const FetchSession = async ()=>{
  try{
    const response = await axios.get(`/`);
    console.log(response)
    return response.data;
  }catch (error){
    console.error('Error fetching session:', error);
    return null
  }

}


 
