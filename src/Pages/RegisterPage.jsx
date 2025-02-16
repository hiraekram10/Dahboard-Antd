import React from 'react'
import RegisterForm from '../Components/RegisterForm'
import { Link } from 'react-router-dom'
import {auth,createUserWithEmailAndPassword,getAuth} from '../config/firebase'

const RegisterPage = () => {
    const register=(a)=>{
        createUserWithEmailAndPassword(auth, a.email, a.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user',user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
 
    }
  return (
    <div>
      <h1>Register</h1>
      <div>
        <RegisterForm register={register}/>
      </div>
      <p>already have an acount <Link to={'/login'}>signin here</Link></p>
    </div>
  )
}

export default RegisterPage
