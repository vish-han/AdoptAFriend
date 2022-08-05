import{auth,provider} from '../firebase'
export const signInWithGoogle=async()=>{
let user;
await auth.signInWithPopup(provider).then((res)=>{
    console.log(res);
    user=res.user;
    console.log(user);  
}).catch((err)=>{
    console.log(err);
})
return user;
}


export const logout=()=>{
    let logout_success
    auth.signOut().then((res)=>{
        logout_success=true;
    }).catch((err)=>{console.log(err.message);})
    return logout_success;
}