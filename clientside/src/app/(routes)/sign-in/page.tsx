"use client";
import { loginUser } from '@/app/services/authServices';
import { LoginSchema } from '@/app/utils/validation';
import Button from '@/component/Button'
import ErrorMessage from '@/component/ErrorMassage';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next'
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface LoginData {
  email:string,
  password:string,
};



const Page: NextPage<LoginData> = ({}) => {

  const { register: login, handleSubmit, formState: { errors } ,setError } = useForm<LoginData>({
    resolver:yupResolver(LoginSchema),
  });

  const onSubmit= async (Data:LoginData)=>{
    try{
      const res = await loginUser(Data.email , Data.password)
      console.log(res,Data)
    }catch(error){
      console.log(error)

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
        <input  {...login("password")}  type='password' placeholder='Enter your Email' title='password'/>
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