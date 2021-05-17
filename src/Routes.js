import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import StepsInvolveInBuying from './pages/StepsInvolveInBuying'
import BuyingWithBroker from './pages/BuyingWithBroker'
import RishOfBuyingWithoutBroker from './pages/RishOfBuyingWithoutBroker'
import SellingWithBroker from './pages/SellingWithBroker'
import StepInvolveInSelling from './pages/StepInvolveInSelling'
import RiskOfSellingWithoutBroker from './pages/RiskOfSellingWithoutBroker'
import TeamingUpWithBroker from './pages/TeamingUpWithBroker'
import GoodBroker from './pages/GoodBroker'
import ClientSaying from './pages/ClientSaying'
import BecomeBroker from './pages/BecomeBroker'
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
                <Route path="/stepsinvolveinselling" exact component={StepInvolveInSelling} />
                <Route path="/riskofsellingwithoutbroker" exact component={RiskOfSellingWithoutBroker} />
                <Route path="/teamingupwithbroker" exact component={TeamingUpWithBroker} />
                <Route path="/goodbroker" exact component={GoodBroker} />
                <Route path="/clientsaying" exact component={ClientSaying} />
                <Route path="/becomebroker" exact component={BecomeBroker} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}


export default Routes;