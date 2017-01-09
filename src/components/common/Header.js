/**
 *
 */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <ul className='nav navbar-nav'>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
