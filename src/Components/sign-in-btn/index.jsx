import React from 'react'
import './style.css'
import {signInWithGoogle,} from '../../Services/auth'
import { UserContext } from '../../Context/user'
import { useContext } from 'react'
const SignInBtn = () => {
  const [,setUser]=useContext(UserContext).user

  const signInBtnClick=  async  () =>{ 
  let signedInUser= await signInWithGoogle();
setUser(signedInUser)

    
  }
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
Sign In With Google
    </div>
  )
}

export default SignInBtn
