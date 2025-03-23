import { Link } from "react-router";
import MenuList from "./MenuList";
import { useState } from "react";

function MenuItem({ item }) {
  const [displaycurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prevdata) => ({
      ...prevdata,
      [getCurrentLabel]: !displaycurrentChildren[getCurrentLabel],
    }));
  }

  return (
    <div className="menu-item">
      <div
        onClick={() => handleToggleChildren(item.label)}
        className="menu-item-div"
      >
        <Link to={item.to}>{item.label}</Link>
        {item && item.children && item.children.length ? (
          <span> {displaycurrentChildren[item.label] ? "-" : "+"}</span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displaycurrentChildren[item.label] ? (
        <MenuList menu={item.children} />
      ) : null}
    </div>
  );
}
export default MenuItem;
