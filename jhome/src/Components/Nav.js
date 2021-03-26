import React, { Component } from "react";
import { Navbar } from "react-responsive-navbar-overlay";

class Nav extends Component {
  render() {
    return (
      <Navbar
        backgroundColor="black"
        brand="JERRY HOMEOWNER"
        links={[
          { text: "HOME", link: "/home" },
          { text: "ABOUT", link: "/about" },
          { text: "CONTACT", link: "/contact" },
        ]}
      />
    );
  }
}

export default Nav;
