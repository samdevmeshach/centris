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
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={Logo} alt="" width="100" height="40"/>
                </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    </ul>
                    <form class="d-flex">
                        <ul class="navbar-nav">
                            <Link class="nav-item" style={isActive(history,"/search")} to="/search">
                                <a class="nav-link"  aria-current="page" href="#">Search</a>
                            </Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropbtn" style={isActive(history,"/buyingwithbroker")} href="">Buy</a>
                                <div className="dropdown-content">
                                    <Link class="nav-item" to="/">
                                    Find a property
                                    </Link>
                                    <Link class="nav-item" to="/buyingwithbroker">
                                        Buying with a broker
                                    </Link>
                                    
                                    <Link class="nav-item" to="/stepsinvolveinbuying">
                                        Steps involved in buying
                                    </Link>
                                    <Link class="nav-item" to="/riskofbuyingwithoutbroker">
                                        Risks of buying without broker
                                    </Link>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropbtn" href="">Sell</a>
                                <div className="dropdown-content">
                                    <Link class="nav-item" to="/sellingwithbroker">
                                        Selling with broker
                                    </Link>
                                    <a class="nav-link" href="">Steps involved in selling</a>
                                    <a class="nav-link" href="">Risks of selling without broker</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropbtn" href="">My Broker</a>
                                <div className="dropdown-content">
                                    <a class="nav-link" href="">Find a broker</a>
                                    <a class="nav-link" href="">Teaming up with a broker</a>
                                    <a class="nav-link" href="">The 10 qualites of good broker</a>
                                    <a class="nav-link" href="">What client are saying</a>
                                    <a class="nav-link" href="">Become a broker</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropbtn" href="">Tools</a>
                                <div className="dropdown-content">
                                    <a class="nav-link" href="">Community proile</a>
                                    <a class="nav-link" href="">Real estate statistics</a>
                                    <a class="nav-link" href="">Useful links</a>
                                    <a class="nav-link" href="">Real estate blogs</a>
                                    <a class="nav-link" href="">Calculator</a>
                                </div>
                            </li>
                            <li>
                                <select class="form-select ml-4" aria-label="Default select example">
                                    <option className="fw-bolder" selected>QC_EN</option>
                                </select>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-primary" type="submit">Log in <i class="fas fa-user"></i></button>
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
