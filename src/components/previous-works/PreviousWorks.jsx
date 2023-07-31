import React from 'react'
import "./previous-works.css"
import img1 from "../../assets/screenshot-1-min.jpg"
import img2 from "../../assets/screenshot-13-min.jpg"
import img3 from "../../assets/screenshot-14-min.jpg"
import img4 from "../../assets/screenshot-3-min.jpg"
import img5 from "../../assets/screenshot-5-min.jpg"
import img6 from "../../assets/screenshot-9-min.jpg"

function PreviousWorks() {
    const datas = [
        {image: img1, hoverText: "Real Estate - Texas, USA"},
        {image: img2, hoverText: "Adult Care - Manchester, UK"},
        {image: img3, hoverText: "Luxury Watches - Lndon, UK"},
        {image: img4, hoverText: "Digital Agency - Detroit, USA"},
        {image: img5, hoverText: "Unisex Wears - London, UK"},
        {image: img6, hoverText: "Lingerie Store - Abuja, Nigeria"},
    ]
  return (
    <section className="section services-sec">
        <p className="text">we create beautiful things</p>
        <h1>Our Previous Works</h1>
        <div className="btns center">
            <button>web design</button>
            <button>graphic design</button>
        </div>
        <div className="works">
            {
                datas.map((data, index) => {
                    const {image, hoverText} = data;
                    return <Work key={index} image={image} hoverText={hoverText} />
                })
            }
            
        </div>
        <div className="btns center">
            <button className='focus all-portfolio' style={{textTransform: "uppercase"}}>see all portfolio</button>
        </div>
    </section>
  )
}

function Work({image, hoverText}) {
    return (
        <div className="work center">
                <img src={image} alt="image" />
                <div className="hover-text center">
                    <p>{hoverText}</p>
                </div>
            </div>
    )
}

export default PreviousWorks