import { useRef } from 'react'
import Logo from "../../images/G Logo.png"
import { RiCustomerService2Fill } from "react-icons/ri"
import { FcMenu } from "react-icons/fc"
import { FaTimes } from "react-icons/fa"
import './top.css'

function Top() {
  const navBar = useRef();
  const navLists = useRef();
  function openNavBar() {
    navBar.current.style.left = "0";
  }
  function closeNavBar() {
    navBar.current.style.left = "200%";
  }
  return (
    <div className='top'>
        <div className="logo center">
          <FcMenu className='burger hidden' onClick={openNavBar} />
          <img src={Logo} alt="logo" />
        </div>
        <div className="links-call" ref={navBar}>
          <FaTimes className='cancel hidden' onClick={closeNavBar} />
        <div className="links center">
          <ul ref={navLists}>
            <li className='hidden home'>home</li>
            <li>portfolio</li>
            <li>about us</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="call-to-ation">
          <span>call now</span>
          <button className='top-btn'>get started</button>
        </div>
        </div>
          <div className="contact">
            <button>contact us <RiCustomerService2Fill id='customer' /> </button>
          </div>
    </div>
  )
}

export default Top