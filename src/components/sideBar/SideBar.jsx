import sideData from "../../constants/sideViewData";
import MenuList from "./MenuList";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function SideBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="sideBar">
        <div className="sideBar-container">
          <h2>C++</h2>
          {<MenuList menu={sideData} />}
        </div>
      </div>
      <div className="sideBar-smallscreens">
        <GiHamburgerMenu
          fontSize={24}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
        />
        {toggleMenu && (
          <div className="sideBar-container overlay slide-left ">
            <FaTimes
              fontSize={22}
              onClick={() => setToggleMenu(false)}
              className="overlay-close"
            />
            <h2>C++</h2>
            {<MenuList menu={sideData} />}
          </div>
        )}
      </div>
    </div>
  );
}
export default SideBar;
