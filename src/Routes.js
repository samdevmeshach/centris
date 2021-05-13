import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import StepsInvolveInBuying from './pages/StepsInvolveInBuying'
import BuyingWithBroker from './pages/BuyingWithBroker'
import RishOfBuyingWithoutBroker from './pages/RishOfBuyingWithoutBroker'
import SellingWithBroker from './pages/SellingWithBroker'
import Footer from './layout/Footer'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/stepsinvolveinbuying" exact component={StepsInvolveInBuying} />
                <Route path="/buyingwithbroker" exact component={BuyingWithBroker} />
                <Route path="/riskofbuyingwithoutbroker" exact component={RishOfBuyingWithoutBroker} />
                <Route path="/sellingwithbroker" exact component={SellingWithBroker} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}


export default Routes;