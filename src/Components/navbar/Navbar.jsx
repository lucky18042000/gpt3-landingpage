import React from 'react';
import styles from "./navbar.css";
import logo from '../../assets/logo.svg'
import{ RiMenu3Line,RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links-conatiner'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibilities">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar