import React from 'react'
import { Link } from 'react-router-dom'

const UsefullLinksContent = () => {
    return (
        <div className="links-bg">
            <div>
                <h2 className="m-5">
                    Province of Québec
                </h2>
                <div className="row m-5">
                    <div className="col-md-6">
                        <h5>Information About Your Municipality/Region</h5>
                        <Link>Government of Québec Portal</Link>
                        <Link>Wikipedia Link to the Province of Québec</Link>
                        <Link>Community Profiles (Statistics Canada)</Link>
                        <Link>Directory of Municipalities</Link>
                    </div>
                    <div className="col-md-6">
                        <h5>Healthcare</h5>
                        <Link>Ministère de la Santé et des Services sociaux of Québec</Link>
                        <Link>Directory of Health and Social Service Resources</Link>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-md-6">
                        <h5>Daycare Centres</h5>
                        <Link>Directory of Daycare Centres</Link>
                        <Link>Find a Daycare</Link>
                    </div>
                    <div className="col-md-6">
                        <h5>Schools</h5>
                        <Link>Find a school</Link>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-md-6">
                        <h5>Activities and Attractions</h5>
                        <Link>Discover the Province of Québec</Link>
                    </div>
                    <div className="col-md-6">
                        <h5>News</h5>
                        <Link>Directory of Regional Media</Link>
                    </div>
                </div>
                <hr />
                <div className="m-5">If a link does not work, or to suggest a new link, please contact us by <Link className="footer-link">clicking here.</Link></div>
            </div>
        </div>
    )
}

export default UsefullLinksContent
