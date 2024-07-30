"use client";
import { NextPage } from 'next'
import { MdReportGmailerrorred } from "react-icons/md";


interface ErrorMessageProps {
    message: string | undefined;
}

const ErrorMessage: NextPage<ErrorMessageProps> = ({message}) => {
    if (!message) return null;
  return <div className='error-massage'>
     <MdReportGmailerrorred/>
     <p>{message}</p>

  </div>
}

export default ErrorMessage