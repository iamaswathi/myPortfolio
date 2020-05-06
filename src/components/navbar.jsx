	
import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
        <header>   
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  {/* Brand */}
  <a className="navbar-brand" href="#app-header">Navbar</a>

  {/* Toggler/collapsibe Button */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Navbar links */}
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item active">
                                <a className="nav-link" href="#ap-header">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ap-about">About</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="#ap-skills">Skills</a>
                            </li>                                
                            <li className="nav-item">
                               <a className="nav-link" href="#ap-timeline">Timeline</a>
                            </li>                                
                            <li className="nav-item">
                                <a className="nav-link" href="#ap-testimonials">Testimonials</a>
                            </li>                               
                            <li className="nav-item">
                                <a className="nav-link" href="#ap-extras">Extras</a>
                            </li>

    </ul>
  </div>
</nav>

</header>
        
    );
  }
}
 
export default NavBar;