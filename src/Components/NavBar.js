import React from 'react'
import CartWidget from './CartWidget'
import Logo from './Logo'
import {Link , NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">  
                <div className="container-fluid d-flex justify-content-evenly">
                    <Link className="navbar-brand" to="/"> <Logo/> </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/bicicletas"} >Bicicletas</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/transmisiones"}>Transmisiones</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/cubiertas"}>Cubiertas</NavLink>
                                        </li>
                                    </ul>
                    </div>
                    <Link to={"/Cart"}><CartWidget/></Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar