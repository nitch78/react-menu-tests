import { useState } from "react";
import Navbar from "./navbar/Navbar.js";
import SiteHeader from "./header/header.js";
import NavMenus from "./nav-menus/NavMenus.js";
import { menuData } from "./data";

function App() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  return (
    <div className="App">
      <SiteHeader color={menuData[activeMenuIndex].color}>
        <Navbar>
          <NavMenus
            activeMenuIndex={activeMenuIndex}
            onSetActiveMenuIndex={setActiveMenuIndex}
          ></NavMenus>
        </Navbar>
      </SiteHeader>
    </div>
  );
}

export default App;
