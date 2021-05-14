import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const TeamingUpWithBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="WHY TEAM UP WITH A REAL ESTATE BROKER?" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/afc667e566f97a775732708394f01aff/bg-header-10.jpg"
            />
            <Card1
                heading=""
                content="Given the amount of money involved and the complexity of the transaction, the sale or purchase of a home deserves careful planning.

                        A real estate broker is an objective ally who accompanies and advises you at all stages of the transaction. They negotiate on your behalf and use their knowledge, expertise and many technology tools to help you buy or sell your property.

                        Here are four reasons why you should use a real estate broker who is a member of the Quebec Professional Association of Real Estate Brokers (QPAREB) or a real estate board:"
                img="https://cdn.centris.ca/public/cms/qc/consumersite/42ed18edc7572e806774a65e87f22a94/sprite-bg-broker_1.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/cdd732a7e5d46921f3d112a6262e76d5/bg-banner-11.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="My broker ensured that the buyer took the necessary steps to have the transfer of ownership notarized – he made sure the buyer had the required financing and made the appointment with the notary. I appreciated having him with me at the notary’s office."
                para="Sonia Lévesque, Boisbriand"
                button_text="Read more testimonials"
            />
            <Card2 
                title="Buy or sell at a fair price"
                content="Thanks to their advanced tools and in-depth knowledge of the market, your broker can accurately assess a property's value, which ensures that you buy or sell at a fair price."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/5cde5223b0ff7bfee67f125ffc6ec507/sprite-juste-prix.png"  
            />
            <Card2 
                title="Knowledge of legal documents"
                content="Your broker helps you fill in the seller’s declaration, prepares and explains all of the clauses in the promise to purchase and sales contract, informs you of the documents you need for the signing at the notary, etc."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/4c0c39b72437edb32f1e6088d95b3fa3/sprite-document.png"  
            />
            <Card2 
                title="Increased visibility"
                content="Your broker lists your property in the real estate brokers' Centris collaboration system. Your property is therefore made available to Quebec's 13,000 real estate brokers as well as their buying clients. It will also be present on Centris.ca, the most visited real estate website in Quebec. This unparalleled visibility translates into a better chance of selling your home quickly and on your terms."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/f7c1c8044204059a6a7c94d24faf08c5/sprite-visibilite.png"  
            />
            <Card2 
                title="Superior protection"
                content="Your broker is governed by the Real Estate Brokerage Act and is subject to collaboration rules and a strict code of ethics that provide you with greater protection."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/f10825d06dd03bc6d3da32ea067f703a/sprite-protection.png"  
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

export default TeamingUpWithBroker
