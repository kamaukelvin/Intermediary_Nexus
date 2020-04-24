import React from 'react'
import {Link} from 'react-router-dom'

export default function Transparentnav() {
    return (
        <div>
        <div className="header__top-bar d-none d-md-block clearfix">
          <div className="container">
            {/* Account Navigation */}
            <ul className="nav-account col-12 p-0">
              <li className="nav-account__item"><Link to="_"> <span className>YOU CAN COUNT ON US</span></Link></li>
              <li className="nav-account__item nav-account__item--wishlist"><Link to="_">CALL US ON 0700000000 </Link></li>
              <li className="nav-account__item"><Link to="_" data-toggle="modal" data-target="#modal-login-register-tabs">MON - FRI 10.00AM TO 06.00PM </Link></li>
            </ul>
            {/* Account Navigation / End */}
          </div>
        </div>
        {/* Header Primary */}
        <div className="header__primary">
          <div className="container shadow-none">
            <div className="header__primary-inner">
              {/* Header Logo */}
              <div className="header-logo">
                <a href="index.html" className="text-light"><span className="text-white">Nexus</span>Insurance</a>
              </div>
              {/* Header Logo / End */}
              {/* Main Navigation */}
              <nav className="main-nav clearfix">
                <ul className="main-nav__list">
                  <li className="active"><Link to="/login">Login</Link></li>
                  <li className="active"><Link to="/signup">Sign Up</Link></li>
                </ul>
              </nav>
              {/* Main Navigation / End */}
            </div>
          </div>
        </div>
      </div>
    )
}
