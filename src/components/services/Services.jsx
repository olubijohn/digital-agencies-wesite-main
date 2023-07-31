import React from 'react'
import "./services.css"
import { PiDesktopTowerLight, PiBriefcaseLight } from "react-icons/pi"
import { TfiVideoClapper } from "react-icons/tfi"
import { MdOutlineMediation, MdCrisisAlert } from "react-icons/md"
import { TbBrandIntercom } from "react-icons/tb"

function Services() {
    const datas = [
        {
            icon: <PiDesktopTowerLight />,
            head: "Web/ Mobile Development",
            body: "We create professional web and mobile apps for small businesses and large corporations"
        },
        {
            icon: <TbBrandIntercom />,
            head: "Branding and Design",
            body: "Creative designs is our specialty. We have talented graphics designers and visual communicators to bring your brand alive."
        },
        {
            icon: <MdOutlineMediation />,
            head: "Digital Marketing",
            body: "We help business market and sell their product through paid advertising."
        },
        {
            icon: <TfiVideoClapper />,
            head: "Video Marketing",
            body: "We create amazing short video suitable for social media ads to promote businesses."
        },
        {
            icon: <MdCrisisAlert />,
            head: "Sales Funnel / Email Marketing",
            body: "We help business automate their sales and lead generation with highly converting sales funnels"
        },
        {
            icon: <PiBriefcaseLight />,
            head: "Growth Hacking Consultation",
            body: "We offer a FREE 30 minutes consultation to figure out how we can improve your business"
        },
    ]
  return (
    <section className="section services-sec">
        <p className="text">what do you need?</p>
        <h1>Our Services</h1>
        <div className="services">
            {
                datas.map((data, index) => {
                    const {icon, head, body} = data;
                    return <Service key={index} icon={icon} head={head} body={body}/>
                })
            }
            
        </div>
    </section>
  )
}

function Service({icon, head, body}) {

    return (
        <div className="service">
            <div className="service-icon">
                {icon}
            </div>
            <div className="service-head">
                <h4>{head}</h4>
            </div>
            <div className="service-body">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Services