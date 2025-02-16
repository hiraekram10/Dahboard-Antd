import React from 'react'
import LoginForm from '../Components/LoginForm'
import { Link,useNavigate } from 'react-router-dom'
import {auth,signInWithEmailAndPassword,getAuth} from '../config/firebase'



const LoginPage = () => {
    const navigate = useNavigate()
    const login =(b)=>{
        signInWithEmailAndPassword(auth, b.email, b.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('loginsuccesfully',user);
          navigate('/profile')
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  
    }
  return (
    <div>
      <div>
    <h1>Login</h1>
    <LoginForm login={login}/>
   <p>Dont have an acount <Link to='/register'>register here</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
