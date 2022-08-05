import React from 'react'
import SignInBtn from '../../Components/sign-in-btn'
import CreatePost from '../../Containers/Create-Post'
import Navbar from '../../Containers/Navbar'


const Home = () => {
  return (
    <div>
<Navbar/>
<CreatePost/>
    </div>
  )
}

export default Home