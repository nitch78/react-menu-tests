import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "./../data";
import "./nav-menus.scss";

export default function NavMenus({ activeMenuIndex, onSetActiveMenuIndex }) {
  const [backupActiveState, setBackupActiveState] = useState(activeMenuIndex);

  function handleonMouseEnter(index) {
    onSetActiveMenuIndex(index);
  }

  function handleOnClick(index) {
    onSetActiveMenuIndex(index);
    setBackupActiveState(index);
  }

  function handleOnMouseLeave() {
    onSetActiveMenuIndex(backupActiveState);
  }

  return (
    <ul className="menus">
      {menuData.map((x, i) => (
        <li
          key={x.label}
          className={`${x.color} ${i === activeMenuIndex ? "active" : ""}`}
          onClick={(e) => handleOnClick(i)}
          onMouseEnter={(e) => handleonMouseEnter(i)}
          onMouseLeave={(e) => handleOnMouseLeave(i)}
        >
          <NavLink to={`/${x.path}`}>{x.label}</NavLink>
          {x.subMenu !== undefined && x.subMenu.length !== 0 && (
            <ul className="sub-menu">
              <div>
                {x.subMenu.map((y) => (
                  <li key={y.path} className={x.color}>
                    <NavLink to={`${y.path}`}> {y.label}</NavLink>
                  </li>
                ))}
              </div>
            </ul>
          )}
        </li>
      ))}
      <div className="slide-bar"></div>
    </ul>
  );
}
