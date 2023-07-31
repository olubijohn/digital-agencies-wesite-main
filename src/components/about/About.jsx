import React from 'react'
import "./about.css"
import asset from "../../assets/asset 15.webp";

function About() {
  return (
    <section className='about-section section'>
        <div className="left">
            <h3>ABOUT GUARANTY RESOURCES</h3>
            <h1>Trusted brand and digital partner to our valued clients</h1>
            <div className="client">
                <div className="c-left">
                    <h1>300+</h1>
                    <p>Client Base</p>
                </div>
                <div className="c-right">
                    <h1>$800K+</h1>
                    <p>Revenue Per Year</p>
                </div>
            </div>
        </div>
        <img src={asset} alt="" className='background' />
        <div className="right">
            <p>Guatanty Resources is a well-established web design/ development, branding, and experienced digital marketing communication agency based in Lagos Nigeria serving a wide range of clients locally and internationally.</p>
            <p>Guatanty Resources remains dedicated to providing the best services to our clients, helping them deliver their business operations more effectively.</p>
            <button>learn more</button>
        </div>
    </section>
  )
}

export default About