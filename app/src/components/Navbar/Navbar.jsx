import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <div className="topnav">
        <a href="https://twitter.com/1stContribution" target="_blank">twitter</a>
        <a href="https://firstcontributions.herokuapp.com"  target="_blank">slack</a>
        </div>
    )
  }
}

export default Navbar;
