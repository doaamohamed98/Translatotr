"use client";
import { NextPage } from 'next'
import { RegistersSchema } from '@/app/utils/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '@/component/ErrorMassage';
import Button from '@/component/Button';
import Link from 'next/link';
import { createUser } from '@/app/services/authServices';


interface FormData {
  username: string;
  email: string;
  password: string;
}


const Page: NextPage <FormData> = ({}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver:yupResolver(RegistersSchema),
  });

  const onSubmit = async (userData: FormData) => {
   try{
  const data = await createUser(userData);
  console.log(`Registration successful`,userData,data)
}catch{
  console.log(`Registration failed. Please try again`)
}

  }
 

  return <>
  <div className='container'>
    <div>
    <h2> Create an account ...</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div>
                <input {...register('username')} placeholder='Enter name' type='text'/>
                {errors.username && <span><ErrorMessage message={errors.username.message}/></span>}
            </div>

            <div>
               <input {...register('email')} placeholder='Enter your Email' type='email'/>
               {errors.email&&<span><ErrorMessage message={errors.email.message}/></span>}
            </div>

            <div>
             <input {...register('password')} placeholder='Enter your password' type='password'/>
             {errors.password&&<span><ErrorMessage message={errors.password.message}/></span>}
            </div>

            <Button text='sign-up' type='submit'/>

            <h4> already have an account? <Link href={`/sign-in`}> sign in</Link></h4>

      </form>
    </div>

  </div>








   </>
}

export default Page

