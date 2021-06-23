import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {Link} from 'react-router-dom';

//import BrandLogo from './brand-logo.png';

import './Navbar.scss'

const Navbar = () => {

    const {logout, isLogin} = useContext(AuthContext);
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper navbar teal darken-2">
            <Link to="/" className="brand-logo nav-name">Проектирование БД</Link>
            {
              isLogin
              ? <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/">Лекции</Link></li>
                  <li><Link to="/Sql">SQL-справочник</Link></li>
                  <li className="out-btn"><a href="/" onClick={logout}>Выйти</a></li>
                </ul>

              : <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Войти</a></li>
                </ul>
              
            }
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
