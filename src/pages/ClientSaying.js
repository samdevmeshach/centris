import React from 'react'
import NavBar from '../layout/NavBar'
import Header from '../layout/Header'
import Content from '../layout/Content'
import Card1 from '../layout/Card1'
const ClientSaying = () => {
    return (
        <div>
            <NavBar />
            <Header 
                title="SATISFIED CLIENTS!" 
                img="https://cdn.centris.ca/public/cms/qc/consumersite/95fdb2f7b8d9629ac0a65100e577a2af/bg-header-12.jpg"
            />
            <Card1 
                
                content="There are countless reasons to work with a real estate broker for the purchase or sale of your house. We need only think of the fact that brokers have the necessary expertise and tools to ensure that you’re buying or selling your property at a fair price, they have a command of all the required legal documents so that you avoid problems during the transaction, they provide increased visibility for your property thereby increasing your chances of selling quickly and, finally, they are subject to a strict brokerage act and bylaws, which provide you with greater protection.

                But let’s see what satisfied clients have to say about buying or selling their home with a real estate broker."
                img="https://cdn.centris.ca/public/cms/qc/consumersite/9603a47f18b10679bfac2ba2f468f925/sprite-bg-broker_4.png"  
            />
            <Content/>
        </div>
    )
}

export default ClientSaying
