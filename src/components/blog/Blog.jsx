import React from 'react'
import "./blog.css"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import img1 from "../../assets/5-YoungExec_AmariRuff-e1557499013944.png"

function Blog() {
    const datas = [
        {
            image: img1, 
            text: "How to increase your sales by 20x with an Ecommerce website"
        },
        {
            image: img1, 
            text: "How to increase your sales by 20x with an Ecommerce website"
        },
        {
            image: img1, 
            text: "How to increase your sales by 20x with an Ecommerce website"
        }
    ]
  return (
    <section className="section services-sec">
        <p className="text">blog</p>
      <h1>Our Knowledgebase</h1>
      <div className="posts">
        {
            datas.map((data, index) => {
                const {image, text} = data;
                return  <Post key={index} image={image} text={text} />
            })
        }
      </div>
    </section>
  )
}

function Post({image, text}) {
    return (
        <div className="post">
            <div className="post-img">
                <img src={image} alt="" />
            </div>
            <div className="post-head">
            <p>{text}</p>
            </div>
            <div className="read-more">
                <span>Read More</span>
                <MdKeyboardDoubleArrowRight />
            </div>
        </div>
    )
}

export default Blog 