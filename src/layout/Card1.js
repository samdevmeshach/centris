import React, { Fragment } from 'react'
import '../assets/css/card.css'
const Card1 = ({heading,content,img}) => {
    return (
        <>
            <div className="card-body">
            <div className="card-left">
                <h1>
                    {heading}
                </h1>
                <p className="mt-4">
                    {content}
                </p>
            </div>
            <div className="card-right">
                <img src={img} alt="" />
            </div>
        </div>
        <div className="card-content">
            <p className="underline"></p>
                <h5 className="mb-4">LEARN MORE</h5>
                <a href="">Choosing Your Real Estate Broker</a>
                <a href="">Evaluate Your Needs</a>
                <a href="">Determine Your Budget</a>
                <a href="">The Property Search</a>
                <a href="">Ready to Make an Offer?</a>
                <a href="">A Simplified Purchase Process</a>
        </div>
        </>
    )
}

export default Card1
