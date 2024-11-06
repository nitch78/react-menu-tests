import { useState } from "react";
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
          <a href={`/${x.path ?? x.subMenu[0]?.path}`}>{x.label}</a>
          {x.subMenu !== undefined && x.subMenu.length !== 0 && (
            <ul className="sub-menu">
              <div>
                {x.subMenu.map((y) => (
                  <li key={y.path} className={x.color}>
                    <a href={`/${y.path}`}> {y.label}</a>
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
