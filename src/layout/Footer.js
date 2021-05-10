import React from 'react'
import '../assets/css/main.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h4>Discover Centris</h4>
                    <div className="hide">
                        <p>
                            Centris.ca is powered by <a href="">Centris</a>, a company offering a wide range of technology tools and solutions tailored to meet the needs of Québec’s real estate brokers.
                        </p>
                            <a href="">Discover Centris</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 className="text-primary">Join our team</h4>
                    <div className="hide">
                    <p>
                        Are you looking for a stimulating work environment and interested in a career with us? We may have the perfect job for you.
                        </p>
                        <a href="">See all available positions</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Contact Centris</h4>
                    <div className="hide">
                        <p>
                        Do you have any questions or comments for us? Simply fill in the form designed for this purpose.
                        </p>
                        <a href="">Contact Centris</a>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-col">
                        <div>
                            <a href="https://www.facebook.com/centris.ca/" target="_blank"><img class="hover" src="https://cdn.centris.ca/public/cms/qc/consumersite/62ee2480d9a0813bd19553a7d3fe16a1/icon-fb.png" /></a>&nbsp;
                            <a href="https://twitter.com/centris" target="_blank"><img class="hover" src="https://cdn.centris.ca/public/cms/qc/consumersite/62ee2480d9a0813bd19553a7d3fe16a1/icon-twitter.png" /></a>&nbsp;
                            <a href="https://www.youtube.com/channel/UCpfIVAb42zHMERF0ueVot-A" target="_blank"><img class="hover" src="https://cdn.centris.ca/public/cms/qc/consumersite/62ee2480d9a0813bd19553a7d3fe16a1/icon-youtube.png" /></a>&nbsp; <a href="https://itunes.apple.com/ca/app/centris.ca/id604024675?mt=8&amp;l=en" target="_blank"><img class="hover" src="https://cdn.centris.ca/public/cms/qc/consumersite/62ee2480d9a0813bd19553a7d3fe16a1/icon-apple.png" /></a>&nbsp;
                            <a href="https://play.google.com/store/apps/details?id=com.centris_mobile&amp;hl=en" target="_blank"><img class="hover" src="https://cdn.centris.ca/public/cms/qc/consumersite/62ee2480d9a0813bd19553a7d3fe16a1/icon-android.png" /></a>
                        </div>
                </div>
                <div className="footer-col">
                    <div className="hide">
                        <a href="">View regions</a>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <a href="">Site map</a>
                    </div>
                </div>
            </div>
            <div class="footer-row">
                    <div class="footer-col">
                        <p class="mobile-center">
                            <a href="https://societecentris.ca/en/" target="_blank"><img src="https://cdn.centris.ca/public/cms/qc/consumersite/74b58f4e3b9bca7b93e43fa0dcb7c1ff/power-by-centris.png" /></a>
                        </p>
                    </div>
                    <div class="footer-col">
                        <p class="mobile-center"><a href="/en/terms-use-privacy-policy">Terms of Use – Privacy Policy</a></p>
                    </div>
                    <div class="footer-col">
                        <p class="mobile-center">&#xA9; Centris 2021. All rights reserved.</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer
