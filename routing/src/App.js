import React, { Component } from 'react';
import './App.css';
import './Form.css';
import logo from './images/gamerrtag-logo.png';
var Link = require("react-router").Link;

class App extends Component {
	render(){
  return (
  	<div className="App">
  		<div className="App-header jumbotron">
  			<ul className="nav navbar-nav navbar-right">
            </ul>
  			<span id="menu-dropdown" className="glyphicon glyphicon-menu-hamburger navbar-left"></span>
  			<img id="gtLogo" src={logo} alt="gamertag-logo"/>
		  </div>
			<div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/">Home</Link></li>
                </ul>
              </div>
			</div>
  			<div>
				{this.props.children}
  			</div>
		  </div>);
	}
};

export default App;