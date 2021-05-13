import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const SellingWithBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="SELLING WITH A REAL ESTATE BROKER" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/d9de792ca183853ffc21773bc6673ca3/bg-header-06.jpg"
            />
            <Card1
                heading="A SUCCESSFUL TRANSACTION STARTS WITH A PROFESSIONAL"
                content="Selling your house is an important decision that often involves large sums of money. It is essential that you be well advised and, above all, well protected. A real estate broker is the professional to turn to for a successful real estate transaction that provides peace of mind, a sense of security and greater ease. Here are some advantages of working with a real estate broker."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/1996a151f5f319683313d5956afd00f2/sprite-bg-sale_1.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/bg-banner-03.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="My broker ensured that the buyer took the necessary steps to have the transfer of ownership notarized – he made sure the buyer had the required financing and made the appointment with the notary. I appreciated having him with me at the notary’s office."
                para="Sonia Lévesque, Boisbriand"
                button_text="Read more testimonials"
            />
            <Card2 
                title="Obtain a Fair Price"
                content="Real estate brokers use advanced tools that provide access to all of the properties sold by a real estate broker, which allows them to perform a comparative market analysis. Your broker will propose a selling price that is consistent with the market reality in your area. You will thereby maximize your chances of selling your property in the best possible timeframe, as the asking price reflects what your home is worth in your neighbourhood."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/c4d8b98772a904234ea3315e87216da2/sprite-vendre-avec-courtier_1.png"  
            />
            <Card2 
                title="Stay Calm When Faced with Legal Documents"
                content="Your real estate broker will inform you of all the steps that must be taken and will accompany you throughout the entire process. He or she will verify all the details surrounding the description of your property, and fill in a Summary that is clear and accurate. Your broker will complete the seller’s declaration with you, giving you additional protection, and will tell you what documents you must have on-hand for the transaction to advance smoothly. In addition to saving time and avoiding aggravation, you can rest assured that the notarized transaction will not be delayed due to a missing document."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/8fe8e60ae967b99e628c421b5b14755e/sprite-vendre-avec-courtier_2.png"  
            />
            <Card2 
                title="Maximize Your Property's Visibility and Traffic"
                content="Your broker will list your property in the real estate brokers’ Centris system and on various consumer websites. Your house or condo will therefore benefit from unsurpassed visibility as it may be seen by:

                Close to Québec’s 13,000 real estate brokers and their buying clients;
                Visitors to the Centris.ca website, which contains the largest number of homes for sale in Québec."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/825aae381c4439e37e2656d60abc83bf/sprite-vendre-avec-courtier_3.png"  
            />
            <Card2 
                title="Benefit From Professional Protections"
                content="Real estate brokers are responsible for the real estate transaction. They are subject to the Real Estate Brokerage Act and must comply with the requirements of the Organisme d’autoréglementation du courtage immobilier du Québec (OACIQ), contribute to the Real Estate Indemnity Fund and hold professional liability insurance. By using a real estate broker to sell your home, you will be teaming up with a professional who will guide you throughout the entire process."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/891a90a80415e7b2e19dbad69decb289/sprite-vendre-avec-courtier_4.png"  
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

export default SellingWithBroker
