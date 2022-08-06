import React from 'react'
import dogPic from '../../assets/dog.png'
import shelterPic from '../../assets/shelter.png'
import catPic from '../../assets/cat.png'
import SignInBtn from '../../Components/sign-in-btn'
import './style.css'
import { UserContext } from '../../Context/user'
const Navbar = () => {
  const [user, ] = React.useContext(UserContext).user

  return (
    <div className="navbar">
        <div className="logo">Adopt A Friend🐕</div>
        <div className="pics"><img src={dogPic} alt="" width="60px" height="60px"/>
        <img src={shelterPic} alt="" width="60px" height="60px"/>
        <img src={catPic} alt="" width="60px" height="60px"/>
        </div>
        {console.log(user)  }
         {user===undefined?<p>Logged In </p>:<SignInBtn/>}  
    </div>
  ) 
}

export default Navbar