import React from 'react'
import '../assets/css/header.css'
const Header = ({title,img}) =>  {
    return (
        <div className="header" style={{backgroundImage:`url(${img})`}}>
            <div className="row g-3">
                <div class="col-md-8">
                    <h1>{title}</h1>
                </div>
                <div class="col-md-4">
                    <button className="btn btn-primary mt-2"><i class="fas fa-share-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header
