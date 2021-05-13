import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const StepsInvolveInBuying = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="STEPS INVOLVED IN BUYING A PROPERTY"
                img="https://cdn.centris.ca/public/cms/qc/consumersite/0c0d3916ba5ab0f123c4d209bc4b68f0/bg-header-03.jpg" 
            />
            <Card1
                heading="TEAM UP WITH A BROKER"
                content="Whether it’s a family home or real estate investment, buying a property is a complex transaction that requires careful thought. When embarking on this journey, it’s in your best interest to team up with a knowledgeable professional: a real estate broker. A broker will guide you through all of the steps involved in purchasing a home. Also, as an objective partner, your broker will help you structure your project and assess the important issues that arise at each stage. And because real estate brokers are governed by the Real Estate Brokerage Act, strict bylaws and a code of ethics, the protections they offer will allow you to avoid potential problems."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/0154ec4897f08a94a4d87c6551ae1108/sprite-bg-purchase_2.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/0a67326e112aba79303342f35bc3b281/bg-banner-04.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="My broker was very important to me throughout the entire process. I appreciate everything she did. I don’t know what I would have done without her."
                para="Claudette Sheehy, Pointe-aux-Trembles"
                button_text="Read more testimonials"
            />
            <Card2 
                title="Choosing Your Real Estate Broker"
                content="Choose a real estate broker who will meet your needs, and do not hesitate to meet with a few brokers to compare the services they offer. If possible, develop a business relationship with a broker who is very familiar with the neighbourhood you live in. To find a broker, consult the directory of all real estate brokers in Québec."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/8a84ffe033d4f37b87982261be0fd82b/sprite-etapes-vente-propriete_1.png"  
            />
            <Card2 
                title="Evaluate Your Needs"
                content="House, condo, loft, studio: what type of property best suits your needs, and in what neighbourhood? Should you buy new, or renovate? How many bedrooms do you want? How many bathrooms? Do you prefer a small or large yard? Discussing these issues with your broker will help determine the features that are essential in successfully moving forward with your search. This is an important step, as it allows you to begin assessing the financial aspect of your purchase."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/bb8214e3c0c2a1b1bf92aa50ef74222f/sprite-etapes-achat-propriete_2.png"  
            />
            <Card2 
                title="Determine Your Budget"
                content="Your broker can help you get started in drawing up a budget, primarily to determine whether it is consistent with your objectives and current real estate market conditions. Your broker will then encourage you to take the first step in obtaining a pre-approved loan from your financial institution. This crucial step accelerates the buying process and gives you credibility with sellers. You are now ready to begin visiting properties."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/6fb2ca9aab8ddf28b6f7fefa6ea72fcf/sprite-etapes-achat-propriete_3.png"  
            />
            <Card2 
                title="The Property Search"
                content="Start your property search in good company. While you can explore the largest number of homes for sale and for rent in Québec by yourself on our website, a real estate broker has the expertise to ensure that you buy your home at a fair price. To help you, your broker will access the computerized Centris system, a highly effective tool that allows brokers to sort through all of the properties for sale by a real estate broker. Your broker will then present you with a relevant and varied selection of properties that match your criteria, and from these options you can choose the properties you want to visit. Your broker will help you identify the advantages and disadvantages of each home or condominium you visit."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/2d89ecfbbcc191efa19b66e8d7ae730c/sprite-etapes-achat-propriete_4.png"  
            />
            <Card2 
                title="Ready to Make an Offer?"
                content="Your broker will help you prepare the offer to purchase. He or she will accompany you throughout the entire process and act as your negotiator. Once your offer has been accepted, your broker will tell you what steps need to be taken in order to continue the purchase process: choosing a certified building inspector or soil analysis specialist if necessary, finalizing the financing, etc. If you sell your home at the same time, your broker will also coordinate the transfer of titles at the notary’s office."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/c19aaff423287f104a4e94680b4dad3e/sprite-etapes-achat-propriete_5.png"  
            />
            <Card2 
                title="A Simplified Purchase Process"
                content="From the offer to purchase to negotiations, from the choice of a notary and qualified inspector to the signature of the deed of sale, buying a home is a complex process. Your real estate broker is a valuable ally in successfully completing your journey to homeownership, thanks to their knowledge, network and experience. For many buyers, simplifying the steps involved in buying a property is an extremely valuable service."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/fc520811a96bec0721799ace7816b47a/sprite-etapes-achat-propriete_6.png"  
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

export default StepsInvolveInBuying
