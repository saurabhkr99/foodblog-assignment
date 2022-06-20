import React from 'react';
// import { Link } from 'react-router-dom';
import { BiMenu,BiSearchAlt2 } from "react-icons/bi";

function Header() {
  return (
    <div className='header1'>
            <nav>
              <h1 className="header1_nam">TheFoodList</h1>
              <div className="header1_icons">
                 <span><BiSearchAlt2/></span> <span><BiMenu /></span>
              
              </div>
            </nav>

    </div>
  )
}

export default Header