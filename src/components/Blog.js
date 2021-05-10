import React from 'react'
import '../assets/css/blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog-row">
                <div className="blog-col card1">
                    <div class="card">
                        <img src="https://cdn.centris.ca/public/cms/qc/consumersite/12870a84999a4b2a9703a006ed9522ec/shutterstock_259440464.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h6 class="card-title">May 7, 2021</h6>
                            <h6 className="text-primary fw-bolder">
                                Why a Certificate of Location?
                            </h6>
                            <p class="card-text">The certificate of location is an important document for both buyers and sellers.It provides important information about your property.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-col card2">
                    <div class="card">
                        <img src="https://cdn.centris.ca/public/cms/qc/consumersite/e4b3f0293aa44d73a2ca86bec375d767/shutterstock_202741987.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h6 class="card-title">May 7, 2021</h6>
                            <h6 className="text-primary fw-bolder">
                                The Importance of Pre-Purchase Inspections
                            </h6>
                            <p class="card-text">The pre-purchase inspection is an essential step, even in a hot real estate market.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-col card3">
                    <div class="card">
                        <img src="https://cdn.centris.ca/public/cms/qc/consumersite/7d56aaa84e974a1d8c1798ebfea94af7/vignette1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title">May 5, 2021</h6>
                            <h6 className="text-primary fw-bolder">
                                How to choose the right outdoor fireplace
                            </h6>
                            <p class="card-text">Want to enjoy the heat of a campfire or fireplace in your own backyard? Have you considered installing an outdoor fireplace?</p>
                        </div>
                    </div>
                </div>
                <div className="blog-col card4">
                    <div class="card">
                        <img src="https://cdn.centris.ca/public/cms/qc/consumersite/71b0ba70533842729f6579b02467ddac/shutterstock_283549505.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title">May 5, 2021</h6>
                            <h6 className="text-primary fw-bolder">
                            12,205 Transactions Concluded in April Across the Province
                            </h6>
                            <p class="card-text">12,205 transactions concluded in April across the province. Active listings for the province of Quebec dropped by 37 per cent.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-primary blog-btn">See all blog posts</button>
        </div>
    )
}

export default Blog
