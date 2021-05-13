import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const RishOfBuyingWithoutBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="RISKS OF BUYING WITHOUT A REAL ESTATE BROKER" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/2386cb98eec83daa1d4a9ec5dd9d48c1/bg-header-04.jpg"
            />
            <Card1
                heading="LACK OF ADVICE TO GUIDE YOU"
                content="Buying a home without the help of a real estate broker means depriving yourself of many benefits and exposing yourself to risks and unfortunate consequences.To make an informed decision, a prudent buyer must be aware of the risks they are exposed to. Here are some of the disadvantages and risks of buying a home by yourself."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/89a2d606c256b50d8add7d549fca13f3/sprite-bg-purchase_4.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/bg-banner-03.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="Because I was buying my first home, it was important for me to have lots of advice and information, and my broker provided me with all the information I needed and helped me feel more secure."
                para="Claire Dauphin, Plateau Mont-Royal (Montréal)"
                button_text="Read more testimonials"
            />
            <Card2 
                title="No detailed real estate market analysis"
                content="Buyers who do not use the services of a broker will not benefit from the professional’s exclusive tools. These include detailed market statistics that enable brokers to establish a fair price for the property the buyer is interested in, so that buyers do not pay more than the actual value of the property. Brokers have leading-edge tools and an understanding of the real estate market that enable them to properly assess the value of each property in a given area."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/fe1f03150b1132b85b196193e2e63832/sprite-risques-acheter-sans-courtier_1.png"  
            />
            <Card2 
                title="No network of experts"
                content="Real estate brokers rely on a network of skilled professionals who can contribute to your transaction: mortgage brokers, building inspectors, land surveyors, soil analysis specialists, notaries, etc. Without a broker, buyers may fail to consult with experts who can help them make informed decisions, or may consult with people who do not have the necessary skills."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/21961ee6732e47b207d496a8ba00712a/sprite-risques-acheter-sans-courtier_2.png"  
            />
            <Card2 
                title="Less specific knowledge"
                content="Real estate is an area that requires significant technical, legal and administrative knowledge. Buyers may not have all of the specific knowledge required to present a complete promise to purchase, or may not know any competent professionals to consult to finance the purchase of their property. The buyer’s promise to purchase may be rejected, the signature of the notarial act may be delayed, or the buyer may end up without a property after having already sold their other home."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/9b7c4dccb7a51eaee5bbb1ff3714b456/sprite-risques-acheter-sans-courtier_3.png"  
            />
            <Card2 
                title="Less emotional detachment"
                content="Emotions play an important role in the decision to buy a home. For some people, “love at first sight” is the deciding factor in whether or not to invest their savings in a house or condo. It is often difficult for buyers to have the required emotional detachment and they may fail to take into account some of the negative aspects of the property they’re interested in."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/cb177db8cf88d92ec244fa8b95456172/sprite-risques-acheter-sans-courtier_4.png"  
            />
            <Card2 
                title="Less security"
                content="If a problem does occur, a buyer without a real estate broker is deprived of all the protections provided by this professional. In Québec, brokers are subject to the Real Estate Brokerage Act. Furthermore, the services provided by your broker must comply with the requirements of the Organisme d’autoréglementation du courtage immobilier du Québec (OACIQ), and all brokers must contribute to the Real Estate Indemnity Fund and must hold professional liability insurance: they bear the responsibility for the transaction, thereby taking this weight off your shoulders."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/def54436bdf8c7c37026956caa862838/sprite-risques-acheter-sans-courtier_5.png"  
            />
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

export default RishOfBuyingWithoutBroker
