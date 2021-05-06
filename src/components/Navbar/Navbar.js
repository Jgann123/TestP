import React, { Component } from "react";
//import { Item } from "semantic-ui-react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Icon } from "semantic-ui-react";
//imrc + tab

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <Icon
            id="burger"
            className={this.state.clicked ? "fas fa-times" : "fas cog icon"}
            size="large"
          ></Icon>
        </div>
        <ul
          id="u.l."
          size="huge"
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="buttons_container">
        {" "}
        </div>
        <Icon id="notification_bell" className="bell icon" size="large"></Icon>
        <Icon id="home_icon" className="home icon" size="large"></Icon>
        <Icon id="smallIcon" className="circle user icon" size="huge"></Icon>
      </nav>
    );
  }
}

export default NavBar;
