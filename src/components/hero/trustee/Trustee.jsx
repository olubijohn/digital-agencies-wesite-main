import React from 'react'
import "./trustee.css"

import asset1 from "../../../assets/asset 1.webp"
import asset2 from "../../../assets/asset 2.webp"
import asset3 from "../../../assets/asset 3.webp"
import asset4 from "../../../assets/asset 4.webp"
import asset5 from "../../../assets/asset 5.webp"

function Trustee() {
  return (
    <>
    <div className='trusted-brands'>
        <div className='brand-text'>
        <h3>Trusted by <span>Top Brands</span></h3>
        <p><a href="">Digital Solutions</a></p>
        </div>
    </div>
    <div className="brands">
       <div>
       <img src={asset1} alt="asset" />
        <img src={asset2} alt="asset" />
       </div>
        <div>
        <img src={asset3} alt="asset" />
        <img src={asset4} alt="asset" />
        <img src={asset5} alt="asset" />
        </div>
    </div>
    </>
  )
}

export default Trustee