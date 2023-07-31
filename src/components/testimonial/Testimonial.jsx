import React from "react";
import "./testimonial.css";
import img1 from "../../assets/images.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

function Testimonials() {
  const datas = [
    {
      text: "I love the level of professionalism they put into their works. I recommend Edensdigital to any one who is starting a new business",
      name: "Kingsley",
      location: "Business Owner - Lagos",
    },
    {
      text: "I love the level of professionalism they put into their works. I recommend Edensdigital to any one who is starting a new business",
      name: "Kingsley",
      location: "Business Owner - Lagos",
    },
    {
      text: "I love the level of professionalism they put into their works. I recommend Edensdigital to any one who is starting a new business",
      name: "Kingsley",
      location: "Business Owner - Lagos",
    },
  ];
  return (
    <section className="section services-sec">
      <p className="text">testimonials</p>
      <h1>What Our Past Client Says</h1>
      <div className="testimonials">
        <Carousel>
        {datas.map((data, index) => {
          const { text, name, location } = data;
          return (
            <Testimonial
              key={index}
              text={text}
              name={name}
              location={location}
              />
              );
            })}
            </Carousel>
      </div>
    </section>
  );
}

function Testimonial({ text, name, location, image }) {
  return (
    <div className="testtimonial">
      <div className="rating">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="profile">
        <div className="profile-img">
          <img src={img1} alt="" />
        </div>
        <div className="profile-info">
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 