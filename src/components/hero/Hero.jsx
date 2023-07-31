import React from 'react'
import "./hero.css"
import { BsArrowRight } from "react-icons/bs"
import Section from './section/Section'
import Trustee from './trustee/Trustee'

function Hero() {
  const sectionData = [
    {
    head: "Web/ Mobile App Development", 
    body: "We develop Websites and Mobile Applications for individuals and businesses"
  }, 
    {
      head: "Branding and Design", 
    body: "We have the best graphics designers and creative experts to bring out your brand's awareness"
    }, 
    {
      head: "Digital Marketing", 
    body: "Facebook, Instagram and Google ads for business growth"
    }]
  return (
    <>
    <section className="hero center">
        <div className="portfolio center">
          <span>Do you wanty to see our portfolio?</span>
          <a href=""><BsArrowRight className='arrow center' /></a>
        </div>
        <div className="text">
          <div className="text-head">
            <h1>guaranty resources </h1>
            <h3>Creative Digital <span>Agency</span></h3>
          </div>
          <div className="text-body">
            <span>Web Design/ Dev | Mobile app Dev | Digital Marketing</span>
          </div>
        </div>
        <div className="email-contact center">
          <input type="email" name="email" id="email" placeholder='Email' />
          <button className="email-btn">contact</button>
        </div>
    </section>
    <section className='new-section section'>
        {
          sectionData.map((data, index) => {
            const {head, body} = data;
            return <Section key={index} head={head} body={body} />
          })
        }
    </section>
    <section className='section top-brands'>
      <Trustee />
    </section>
    </>
  )
}

export default Hero