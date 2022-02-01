import React, { Component } from 'react';
import "../styles/header.css"
export default class Header extends Component {
   
  render() {
    
    return <div className="header-container">
    <div className="header-topbar">
    <div className="topbar-content">
      <span>{this.props.storeConfig.welcome}</span>
     
    </div></div>
    <nav>
      <div className="nav-bar">
        <div className="search-bar">
          <div className="search-bar-inner">
            <img src="images/search.svg" alt="" />
            <input type="text" placeholder='Type a new search' />
          </div>
        </div>
        <div className="logo">
        <img src="https://demonexpwa.gumlet.io/logo/stores/1/NexPWA_-_Color_2.png" alt="logo" />
        </div>
        <div className="buttons">
         <div className="lang-selector">
           <select name="selector" id="lang-select">
             <option value="english">English</option>
             <option value="arbic">Arabic (عربى)</option>
           </select>
           </div>
           <div className="currency-selector">
             <select name="currency" id="currency-select">

               {this.props.currency.available_currency_codes.map((val,i)=>{
                 return(
                   <option value={val} key={i}>{val}</option>
                 )
               })}
             </select>
             </div> 
              <div className="icons">
               <span><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></span>
               <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span>
              </div>
        </div>
      </div>
    </nav>
    <div className="menu-container">
      <ul className="menu-list">
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Footwear</a></li>
        <li><a href="#">Trending</a></li>
      </ul>
    </div>
    <hr />
  
  </div>;
  }
}
