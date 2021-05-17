import React from 'react'
import '../assets/css/main.css'
import Logo from '../assets/img/logo.gif'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return {borderBottom:"3px solid skyblue"}
    }
    else{
        return {border:"none"}
    }
}


const NavBar = ({history}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width="100" height="40"/>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    </ul>
                    <form className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history,"/search")} to="/search">
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropbtn" style={isActive(history,"/buyingwithbroker")} to="">Buy</Link>
                                <div className="dropdown-content">
                                    <Link className="nav-item" to="/">
                                        Find a property
                                    </Link>
                                    <Link className="nav-item" to="/buyingwithbroker">
                                        Buying with a broker
                                    </Link>
                                    <Link className="nav-item" to="/stepsinvolveinbuying">
                                        Steps involved in buying
                                    </Link>
                                    <Link className="nav-item" to="/riskofbuyingwithoutbroker">
                                        Risks of buying without broker
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropbtn" href="">Sell</a>
                                <div className="dropdown-content">
                                    <Link className="nav-item" to="/sellingwithbroker">
                                        Selling with broker
                                    </Link>
                                    <Link className="nav-item" to="/stepsinvolveinselling">
                                        Steps involved in selling
                                    </Link>
                                    <Link className="nav-item" to="/riskofsellingwithoutbroker">
                                        Risks of selling without broker
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropbtn" href="">My Broker</a>
                                <div className="dropdown-content">
                                    <a className="nav-link" href="">Find a broker</a>
                                    <Link className="nav-item"to="/teamingupwithbroker">
                                        Teaming up with a broker
                                    </Link>
                                    <Link className="nav-item"to="/goodbroker">
                                        The 10 qualites of good broker
                                    </Link>
                                    <Link className="nav-item"to="/clientsaying">
                                        What client are saying
                                    </Link>
                                    <Link className="nav-item"to="/BecomeBroker">
                                        Become a broker
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropbtn" href="">Tools</a>
                                <div className="dropdown-content">
                                    <a className="nav-link" href="">Community profile</a>
                                    <a className="nav-link" href="">Real estate statistics</a>
                                    <a className="nav-link" href="">Useful links</a>
                                    <a className="nav-link" href="">Real estate blogs</a>
                                    <a className="nav-link" href="">Calculator</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <select className="form-select ml-4" aria-label="Default select example">
                                    <option className="fw-bolder" selected>QC_EN</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-primary" type="submit">Log in <i class="fas fa-user"></i></Link>
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)
