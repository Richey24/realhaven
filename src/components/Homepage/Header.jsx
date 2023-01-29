import React, { useState } from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ham from "../../img/ham.svg"
import logo from "../../img/logo_blue.svg"
import "./Header.css"
import cancel from "../../img/cancel.svg"

const Header = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
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
        <img onClick={() => setShow(true)} className='navham' src={ham} alt="" />
      </div>
      <Offcanvas className="homeCanvas" placement='end' show={show} onHide={() => setShow(false)}>
        <OffcanvasHeader>
          <p className='navFirst'><img src={logo} alt="" /> Haven</p>
          <img className='homeCanvasCancel' onClick={() => setShow(false)} src={cancel} alt="" />
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className='homeCanvasFirstDiv'>
            <p>All properties</p>
            <p>For Agents</p>
            <p>Blogs</p>
          </div>
          <hr />
          <div className='homeCanvasSecondDiv'>
            <p>Sign up</p>
            <p>Sign in</p>
            <button>Post a property</button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default Header