import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const StepInvolveInSelling = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="STEPS INVOLVED IN SELLING A PROPERTY"
                img="https://cdn.centris.ca/public/cms/qc/consumersite/a87a050013476a30992af70561287688/bg-header-07.jpg" 
            />
            <Card1
                heading="TEAM UP WITH A BROKER"
                content="You’ve decided to sell your house? It’s in your best interest to undertake this important project with a real estate broker. It will enable you to take advantage of the broker’s vast network of contacts, increase the visibility of your property and by extension increase traffic among potential buyers. Furthermore, you will maximize your chances of obtaining a fair price for your house, as real estate brokers have the knowledge and tools to perform a thorough comparative market analysis. Finally, a real estate broker has the expertise to fill in the many legal documents required in a successful real estate transaction. And because their work is governed by the Real Estate Brokerage Act, you are well protected."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/3c53e51a6acdf8c92ac3274ccff7c080/sprite-bg-sale_2.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/a5720b7e468906984bf2b8380ec67ea9/bg-banner-08.jpg"
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
                title="Showcasing Your Property"
                content="Under the expert eye of your broker, take a tour of your property and discuss the appropriate changes that will enable you to present your property in its best light. Your broker will be able to suggest modest but important investments that will enhance the appearance of your property and increase its selling price."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/783cad698bc94521671180666d89ad0e/sprite-etapes-vente-propriete_2.png"  
            />
            <Card2 
                title="Getting a Fair Price"
                content="Real estate brokers have access to advanced tools that enable them to accurately assess the value of your home. A fair selling price, which reflects what your house is worth in your neighbourhood and in current market conditions, will ensure that your property is more likely to find a buyer. Your real estate broker’s expertise is therefore essential when the time comes to properly assess the value of your home."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/8a52a7fc3cba263a1ac31ac661a31db0/sprite-etapes-vente-propriete_3_pig.png"  
            />
            <Card2 
                title="Marketing Your House"
                content="In addition to overseeing all forms of advertising and promotion, your broker manages the logistics of property visits, direct marketing and networking initiatives, the organization of open houses and the management of phone calls. Having a broker take care of these elements saves you a considerable amount of time and greatly reduces your stress level. Your broker will also develop a sales strategy that is designed specifically for your property."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/7986fde8f81db94a29256189e0955979/sprite-etapes-vente-propriete-4.png"  
            />
            <Card2 
                title="The Sales Process"
                content="A real estate broker helps simplify the complex steps in a transaction, from receiving purchase offers and drafting counter-offers to carefully examining the buyer’s conditions, the seller’s declaration, and other official documents required for the sale. Your broker also ensures that you have the appropriate official documents on hand in a timely manner. If you receive more than one purchase offer, your broker will help you assess the advantages and disadvantages of each offer."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/850570f6567d8138508042515fb78018/sprite-etapes-vente-propriete-5.png"  
            />
            <Card2 
                title="Signing the Deed of Sale"
                content="Your real estate broker will accompany you to the very last stage of your property sale. He or she will be present at the notary’s office for the signing of official documents and will remain available to answer any questions you may have. And once your home is sold, your broker is the perfect person to help you find your next property."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/bc82af6696cfff4823f2ddf9212b868d/sprite-etapes-vente-propriete-6.png"  
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

export default StepInvolveInSelling
