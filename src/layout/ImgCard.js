import React from 'react'
import '../assets/css/imgcard.css'

const ImgCard = ({bgimg,icon,heading,para,button_text}) => {
    return (
        <div className="img-bg" style={{backgroundImage:`url(${bgimg})`}}>
            <div className="hide">
                <img src={icon} alt="" />
            </div>
            <div>
                <h3>
                    {heading}
                </h3>
                <p>
                   {para}
                </p>
                <button className="btn btn-primary">{button_text}</button>
            </div>
        </div>
    )
}

export default ImgCard
