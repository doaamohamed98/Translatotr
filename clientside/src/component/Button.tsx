"use client";
import { NextPage } from 'next'

interface Props {
    text:string , type:string
}

const Button: NextPage<Props> = ({text,type}) => {
  return <button type="submit">{text}</button>
}

export default Button