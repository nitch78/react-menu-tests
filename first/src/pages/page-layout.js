import Navbar from "../navbar/Navbar.js";
import SiteHeader from "../header/header.js";
import NavMenus from "../nav-menus/NavMenus.js";
import { menuData } from "../data";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.js";

function PageLayout({ state, stateHandler }) {
  return (
    <>
      <SiteHeader
        color={menuData[state.activeMenuIndex]?.color}
        headerData={menuData[state.activeMenuIndex]}
      >
        <Navbar activeMenuIndex={state.activeMenuIndex}>
          <NavMenus
            activeMenuIndex={state.activeMenuIndex}
            onSetActiveMenuIndex={stateHandler}
          ></NavMenus>
        </Navbar>
      </SiteHeader>
      <div
        className="page-container
  "
      >
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default PageLayout;
