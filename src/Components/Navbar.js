import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav >
                <div className="nav-wrapper #64b5f6 blue lighten-2">
                    <Link to="/" className="brand-logo">Demo</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
