import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>{
  return(
    <div>
      <header className="header">
        <div className="header__inner">
            <Link to="/">Home</Link>
            <Link to="/test">LearnRoom</Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar;
