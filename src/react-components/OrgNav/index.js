import React from "react";
import "./styles.css";

/* The Navigarion Bar of Organization Component */
class OrgNav extends React.Component {
  render() {
    
    return (
      <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="fh5co-logo"><a href="index.html">Volunteer<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/post">Post a New Job</a></li>
                                <li><a href="/OrgProfile">Profile</a></li>
                                <li><a href="/applicants">All applicants</a></li>
                                <li><a href="/">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
	        </nav>
    );
  }
}

export default OrgNav;
