import React from 'react'
import "./video.css"
import asset6 from "../../assets/asset 6.webp"
import { GoPlay } from "react-icons/go"
function Video() {
  return (
    <section className='video-sec section'>
        <div className="video">
        <img src={asset6} alt="" className="background" />
        <GoPlay className='icon' />
        </div>
    </section>
  )
}

export default Video