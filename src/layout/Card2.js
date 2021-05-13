import React from 'react'
import '../assets/css/card.css'
const Card2 = ({title,content,image}) => {
    return (
        <div>
            <div className="card-body">
                <div className="card-left">
                    <h3>
                        {title}
                    </h3>
                    <p className="mt-4">
                        {content}
                    </p>
                </div>
                <div className="card-right hide">
                    <img src={image} width="150" height="150" alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Card2
