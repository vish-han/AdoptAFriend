import React from 'react'
import './style.css'
import {signInWithGoogle,} from '../../Services/auth'
const SignInBtn = () => {
  const [user,setUser]=React.useState({})
  const signInBtnClick=async  () =>{ 
  let signedInUser=await signInWithGoogle(  );
  if(signedInUser){setUser(signedInUser)
    console.log(user);
  }
    
  }
  const a=()=>{
    console.log("hello");
    console.log(signInBtnClick);
  }
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
Sign In With Google
    </div>
  )
}

export default SignInBtn
