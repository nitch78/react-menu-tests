import React from "react";
import Navbar from "./navbar/Navbar.js";
import SiteHeader from "./header/header.js";
import NavMenus from "./nav-menus/NavMenus.js";
import { menuData } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
    this.state = { activeMenuIndex: 0, youpi: "fun" };
  }

  stateHandler(activeMenuIndex) {
    this.setState({ activeMenuIndex });
  }

  handleScroll = () => {
    if (window.scrollY > 5) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <SiteHeader color={menuData[this.state.activeMenuIndex]?.color}>
          <Navbar>
            <NavMenus
              activeMenuIndex={this.state.activeMenuIndex}
              onSetActiveMenuIndex={this.stateHandler}
            ></NavMenus>
          </Navbar>
        </SiteHeader>
        <div className="class-content"></div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
