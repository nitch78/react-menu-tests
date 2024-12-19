import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cabinet from "./pages/cabinet/cabinet.js";
import Osteopathie from "./pages/osteo/osteopathie/osteopathie.js";
import PageLayout from "./pages/page-layout.js";
import Parcours from "./pages/osteo/parcours/parcours.js";
import Diplomes from "./pages/osteo/diplomes/diplomes.js";
import Ateliers from "./pages/osteo/ateliers/ateliers.js";
import Consultations from "./pages/osteo/consultations/consultations.js";
import { menuData } from "./data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.stateHandler = this.stateHandler.bind(this);
    this.state = { activeMenuIndex: 0 };
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
    console.log(window.location.pathname);
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      activeMenuIndex: menuData.findIndex(
        (x) =>
          x.path === window.location.pathname.substring(1) ||
          x.subMenu?.find(
            (y) => y.path === window.location.pathname.substring(1)
          )
      ),
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout
                  state={this.state}
                  stateHandler={this.stateHandler}
                />
              }
            >
              <Route index element={<Navigate replace to="cabinet" />}></Route>
              <Route path="cabinet" element={<Cabinet />}></Route>
              <Route path="osteopathie">
                <Route
                  index
                  element={<Navigate replace to="presentation" />}
                ></Route>
                <Route path="presentation" element={<Osteopathie />}></Route>
                <Route path="consultations" element={<Consultations />}></Route>
                <Route path="parcours" element={<Parcours />}></Route>
                <Route path="diplomes" element={<Diplomes />}></Route>
                <Route path="ateliers" element={<Ateliers />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
