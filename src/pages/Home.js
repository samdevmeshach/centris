import React from 'react'
import Main from '../components/home/Main'
import Blog from '../components/home/Blog'
import Section from '../components/home/Section'
import DiscoverCentris from '../components/home/DiscoverCentris'
import WorkWithBroker from '../components/home/WorkWithBroker'
import NavBar from '../layout/NavBar'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Main />
            <Blog />
            <Section />
            <DiscoverCentris />
            <WorkWithBroker />
        </div>
    )
}

export default Home
