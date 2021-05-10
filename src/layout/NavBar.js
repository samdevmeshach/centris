import React from 'react'
import '../assets/css/main.css'
import Logo from '../assets/img/logo.gif'
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={Logo} alt="" width="100" height="50"/>
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    </ul>
                    <form class="d-flex">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Buy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Sell</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">My broker</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Tools</a>
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

export default NavBar
