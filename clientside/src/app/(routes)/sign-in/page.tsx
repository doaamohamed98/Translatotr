"use client";
import { loginUser } from '@/app/services/authServices';
import { LoginSchema } from '@/app/utils/validation';
import Button from '@/component/Button'
import ErrorMessage from '@/component/ErrorMassage';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface LoginData {
  email:string,
  password:string,
};

const Page: NextPage<LoginData> = ({}) => {

  const { register: login, handleSubmit, formState: { errors } ,reset} = useForm<LoginData>({
    resolver:yupResolver(LoginSchema),
  });

  const onSubmit= async (Data:LoginData)=>{
    try{
      const data = await loginUser(Data.email ,Data.password);
      console.log("Login =>",data);
      
      if(!data?.success){
        toast.error("Invalid email or password");
      } else{
        toast.success("Login is successful");
        reset()


      }

    }catch(error){
      console.log("Login failed. Please try again",error)
    }
  }


  return <>

  <div className='container'>

    <div>
    <h2>Sign in</h2>
    <p>Hey there... Welcome back!</p>

     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input  {...login("email")}  type='email' placeholder='Enter your Email' title='email'/>
        {errors.email && <span><ErrorMessage message={errors.email.message}/></span>}
      </div>

      <div>
        <input  {...login("password")}  type='password' placeholder='Enter your password' title='password'/>
        {errors.password && <span><ErrorMessage message={errors.password.message}/></span>}
      </div>

      <Button text='sign-in' type='submit'/>
      <h4> New User?<Link href={`/sign-up`}> sign up</Link></h4>

     </form>

    </div>
    
  
  </div>
  
  </>
}

export default Page