import React from 'react'
import { useNavigate } from 'react-router-dom'
import ham from "../../img/ham.svg"
import logo from "../../img/logo_blue.svg"
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='heroNav'>
        <p className='navFirst'><img src={logo} alt="" /> Haven</p>
        <div className='navSecond'>
          <p>All properties</p>
          <p>For Agents</p>
          <p>Blogs</p>
        </div>
        <div className='navThird'>
          <p onClick={() => navigate("register")} className='navSignUp'>Sign up</p>
          <p onClick={() => navigate("login")} className='navSignIn'>Sign in</p>
          <button className='navPost'>Post a property</button>
        </div>
        <img className='navham' src={ham} alt="" />
      </div>
    </div>
  )
}

export default Header