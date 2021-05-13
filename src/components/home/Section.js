import React from 'react'
import '../../assets/css/section.css'
const Section = () => {
    return (
        <div>
            <div className="section-row">
                <div className="section-col">
                    <img src="https://cdn.centris.ca/public/cms/qc/consumersite/b2ca6b944ce7395cc267be75ad09879a/graph-propriete.png" alt="" />
                    <h3>All properties</h3>
                    <p>Houses, condos, land, country homes, apartments... The Centris.ca website contains the largest number of homes for sale and for rent in Québec.</p>
                    <button className="btn btn-outline-primary">Find property</button>
                </div>
                <div className="section-col">
                    <img src="https://cdn.centris.ca/public/cms/qc/consumersite/b2ca6b944ce7395cc267be75ad09879a/graph-agences.png" alt="" />
                    <h3>All Agencies</h3>
                    <p>
                        When buying and selling, count on the strength of a network composed of all Québec real estate agencies on Centris.ca.
                    </p>
                </div>
                <div className="section-col">
                    <img src="https://tst2-cdn.centristst.ca/public/cms/qc/consumersite/b2ca6b944ce7395cc267be75ad09879a/graph-courtiers.png" alt="" />
                    <h3>All brokers</h3>
                    <p>
                        Find the real estate broker who will guide you in your transaction. Search by areas served or even languages spoken.
                    </p>
                    <button className="btn btn-outline-primary">Find broker</button>
                </div>
            </div>
        </div>
    )
}

export default Section
