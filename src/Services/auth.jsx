import {auth,provider}  from '../firebase'
import { signInWithPopup } from "firebase/auth";
const signInWithGoogle=async()=>{
let user;
signInWithPopup(auth ,  provider)
.then((res)=>{
    
    user=res.user;
    console.log(user);  
}).catch((err)=>{
    console.log(err);
})
return user;
}


const logout=async()=>{
    let logout_success
        await   auth.signOut().then((res)=>{
        logout_success=true;
    }).catch((err)=>{console.log(err.message);})
    return logout_success;
}

export {signInWithGoogle}