import React from 'react'
import Header from '../layout/Header'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const BecomeBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="BECOME A REAL ESTATE BROKER AT THE COLLÈGE DE L'IMMOBILIER DU QUÉBEC"
                img="https://cdn.centris.ca/public/cms/qc/consumersite/d9cc1dd3827b579a1adba60eadef96ef/bg-header-13.jpg"
            />
            <div className="row m-5">
                <div className="col-md-8">
                    <p>
                        Are you looking for an exciting career that provides variety and the opportunity to make a real difference in people's lives? Then becoming a real estate broker is for you!
                    </p>
                    <p>
                        <a href="">The Collège de l’immobilier du Québec</a> <b>is the leader in real estate training.</b>    
                    </p>
                    <p>
                        Real estate brokers accompany their clients in one of the most important decisions of their life. A broker acts as an advisor, a market expert, an intermediary and a negotiator. Learn more about the real estate broker profession here. It requires solid training, which leads to certification by the Organisme d’autoréglementation du courtage immobilier du Québec (OACIQ).
                    </p>
                    <p><b>Proactive, lively, passionate, the Collège de l’immobilier du Québec is your college!</b></p>
                    <p>
                        We offer training to become a residential real estate broker, a commercial real estate broker or an agency executive officer. If you're already a broker, you can further enhance your expertise! Training is provided during the day, the evening and on weekends, in French and English, by professionals who are active in their field of expertise.
                    </p>
                    <p>
                        The Collège provides its training in a variety of formats (in virtual classrooms and by correspondence) throughout Québec.
                    </p>
                    <p>
                        Visit <a href=""> www.collegeimmobilier.com</a> or call us at 1-888-762-1862, option 4, to learn more about the real estate broker profession and the training we provide. Take the first step towards an exciting career!
                    </p>
                </div>
                <div className="col-md-4 img-right">
                    <img src="https://cdn.centris.ca/public/cms/qc/consumersite/ac3ad0c4ff74a987665b49801d5c0f62/ciq_logo_en_cmyk_4.png" alt="" />
                    <a href=""> www.collegeimmobilier.com</a>
                </div>
            </div>
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/41252a471b1980478c03cff8610102fa/bg-banner-bottom.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/41252a471b1980478c03cff8610102fa/banner-section-btm.png"
                heading="FIND THE BROKER THAT'S RIGHT FOR YOU, WITH CENTRIS.CA"
                para="Claudette Sheehy, Pointe-aux-Trembles"
                button_text="Find Your Broker"
            />
        </div>
    )
}

export default BecomeBroker
