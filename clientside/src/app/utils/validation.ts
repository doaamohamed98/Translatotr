import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

export const RegistersSchema = yup.object().shape({
    username:yup.string().trim().min(3,'Username must be at least 3 characters long').required('Username is required'),
    email:yup.string().matches(emailRegex, 'Invalid email').required('Email is required'),
    password:yup.string().trim().min(8,'Password must be at least 8 characters long').required('Password is required'),
})


export const LoginSchema = yup.object().shape({
    email:yup.string().trim().required('Email is required').email(`Invalid email or password`),
    password:yup.string().trim().required("Password is required'"),
})