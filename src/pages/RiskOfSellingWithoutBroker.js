import React from 'react'
import Header from '../layout/Header'
import Card1 from '../layout/Card1'
import Card2 from '../layout/Card2'
import NavBar from '../layout/NavBar'
import ImgCard from '../layout/ImgCard'
const RiskOfSellingWithoutBroker = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="RISKS OF SELLING WITHOUT A REAL ESTATE BROKER" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/0ea75321e688a00dc1d0be819fb48050/bg-header-08.jpg"
            />
            <Card1
                heading="CHOOSING TO GO IT ALONE"
                content="Selling a home without the help of a real estate broker means depriving yourself of many benefits and exposing yourself to potentially serious risks. In addition to a drop in visibility for your property, owners who sell alone and/or with a specialized website (for sale by owner, for sale without a broker, etc.) must be prepared to deal with various obstacles. Stress and wasted time are some of the risks to consider before selling your house alone."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/29bb56cb6ed6187d9e7758f2ca031157/sprite-bg-sale_4.png"

            />
            <ImgCard
                bgimg="https://cdn.centris.ca/public/cms/qc/consumersite/a1d531007cac95e35e19e3b0a017d60d/bg-banner-09.jpg"
                icon="https://cdn.centris.ca/public/cms/qc/consumersite/9be183dfd96e6930b2405ea6954a5e60/testimonials.png"
                heading="Because I was buying my first home, it was important for me to have lots of advice and information, and my broker provided me with all the information I needed and helped me feel more secure."
                para="Claire Dauphin, Plateau Mont-Royal (Montréal)"
                button_text="Read more testimonials"
            />
            <Card2 
                title="Less visibility, more work"
                content="Sellers who do not use the services of a real estate broker will not benefit from the visibility provided by the Centris system and the Centris.ca public website. The Centris system, the Québec equivalent of the MLS® system, is available exclusively to Québec’s 13,000 real estate brokers and their buying clients. The Centris.ca public website contains the largest number of homes for sale in Québec."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/1fc43d88836e7e3d1fd0ba6084b021c9/sprite-vendre-par-proprietaire_1.png"  
            />
            <Card2 
                title="Less time, more to manage"
                content="Without a broker, the seller will have to answer all requests for information about the property. The seller will also need to manage all property visits and make themselves available according to the schedules of potential buyers. Furthermore, the seller has no guarantee that visitors are actually serious buyers. Managing disillusionment or disappointment is even more difficult when you’re alone."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/454f565ad45886e143c9d81c332de8cf/sprite-vendre-par-proprietaire_2.png"  
            />
            <Card2 
                title="Fewer means, greater consequences"
                content="Sellers do not have access to the advanced tools that brokers use to perform a comparative market analysis and establish a fair price. As a result, the seller may ask too high a price compared to the market value of the property and thereby risks a loss of interest from buyers and a lengthy selling time. Sellers also risk underestimating the value of their property and losing a substantial amount of money."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/a8497bd87e653efedfdbbcb07352286a/sprite-vendre-par-proprietaire_3.png"  
            />
            <Card2 
                title="Less expertise, greater risk"
                content="Without a broker, the seller may be faced with a buyer who commits to purchasing the property but has conditions that still need to be met, such as financing, an inspection, etc. As a result, the promise to purchase could be cancelled, or the signature of the notarial act may be delayed. Due to a lack of information, the seller may not have all of the documents on hand required by the notary. If this is the case, the signature of the sales contract will be delayed and the seller may have to absorb the expense of owning two properties if he has already purchased another home."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/4e5fbce7d1627e1feaa985645d921db7/sprite-vendre-par-proprietaire_4.png"  
            />
            <Card2 
                title="Less security, increased vulnerability"
                content="Because sellers who do not use a broker probably do not have liability insurance, they have a lot to lose if difficulties arise with the transaction or if a lawsuit is brought forward. Brokers are subject to the Real Estate Brokerage Act and other strict requirements: they therefore bear the responsibility of the transaction."
                image="https://cdn.centris.ca/public/cms/qc/consumersite/45b9816ab43f80f20569529d7e75ddb3/sprite-vendre-par-proprietaire_5.png"  
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

export default RiskOfSellingWithoutBroker
