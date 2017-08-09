import React from 'react';
import './App.css';
import logo from './images/gamerrtag-logo.png';
var Link = require("react-router").Link;

const App = () => {
  return (
  	<div className="App">
  		<div className="App-header jumbotron">
  			<ul className="nav navbar-nav navbar-right">
            </ul>
  			<span id="menu-dropdown" className="glyphicon glyphicon-menu-hamburger navbar-left"></span>
  			<img id="gtLogo" src={logo} alt="gamertag-logo"/>
  		</div>
  			<div>
				{/*{this.props.children}*/}
  			</div>
  		</div>);
};

export default App;