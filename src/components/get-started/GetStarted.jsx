import React from 'react'
import "./get-started.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import img1 from "../../assets/5-YoungExec_AmariRuff-e1557499013944.png"

function GetStarted() {
  return (
    <section className="get-started center">
        <div className="socials">
        <FaFacebookF className='icon' />
        <FaTwitter className='icon' />
        <FaInstagram className='icon' />
        <FaLinkedin className='icon' />
        <FaYoutube className='icon'/>
        </div>
        <h1>Start your next project with us</h1>
        <button>get started</button>
        <img src={img1} alt="" className='background' />
    </section>
  )
}

export default GetStarted