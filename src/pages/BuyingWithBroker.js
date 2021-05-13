import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const BuyingWithBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="BUYING WITH A REAL ESTATE BROKER" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/e2b091c66fc172a357ca15ebbf1bf42b/bg-header-02.jpg"
            />
            <Card1
                heading="AN ADVISER WHO WILL GUIDE YOU"
                content="Buying a home, condo or any type of property is an important decision. It is essential that you be well advised and, above all, well protected. A real estate broker is the professional to turn to for a successful transaction that provides peace of mind, a sense of security and greater ease. Here are some advantages of working with a professional."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/a5e2e9b00d9987414065fb0010cfe340/bigkey.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/bg-banner-03.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="My broker ensured that the buyer took the necessary steps to have the transfer of ownership notarized – he made sure the buyer had the required financing and made the appointment with the notary. I appreciated having him with me at the notary’s office."
                para="Sonia Lévesque, Boisbriand"
                button_text="Read more testimonials"
            />
            <Card2 
                title="A fair price"
                content="Real estate brokers have the necessary resources and expertise to accurately assess the value of the properties you’re interested in. They have access to market statistics and advanced tools that enable them to perform a comparative market analysis. You will therefore become an informed buyer and will ensure that you pay a fair price for your new home."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/e9aeeab7f018453943c763268d073500/pig.png"  
            />
            <Card2 
                title="A command of legal documents"
                content="Your real estate broker will inform you of all the steps that must be taken and will accompany you throughout the entire process. Your broker will prepare and explain all the terms of the promise to purchase, ensuring that it meets your needs and your budget, and will negotiate on your behalf and in your best interest. Your broker will also guide you to the appropriate professionals: mortgage lender, qualified building inspector, notary, soil analysis specialist, etc. He or she will also accompany you to the home inspection, review the inspector’s report with you, and advise you on the follow-up that must be performed."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/025fbcd17420696f7c78eb4b0f7b244f/hammer.png"  
            />
            <Card2 
                title="Largest supply of properties in Québec"
                content="Your real estate broker is part of a network of close to 13,000 brokers who list their properties in the Centris system, the Québec equivalent of the MLS system for accessing complete property information. He or she will help you select the homes that interest you and that meet your requirements among the largest inventory of properties for sale in Québec. Your broker will work closely with the other brokers in the network to organize property visits, and is an objective ally who will tell you about the advantages and disadvantages of each property you visit."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/6ad83f481a5b7364e13a041077e3bafc/homeonmap.png"  
            />
            <Card2 
                title="Security and protections"
                content="Real estate brokers are responsible for the real estate transaction. They are subject to the Real Estate Brokerage Act and must comply with the requirements of the Organisme d’autoréglementation du courtage immobilier du Québec (OACIQ), contribute to the Real Estate Indemnity Fund and hold professional liability insurance. Using a real estate broker to buy a home or any other type of property means teaming up with a professional who will properly advise and guide you."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/7313b30fdec1af60eae590df53ce501e/lock.png"  
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

export default BuyingWithBroker
