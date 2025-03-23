import MenuItem from "./MenuItem";

function MenuList({ menu = [] }) {
  return (
    <div>
      {menu &&
        menu.length &&
        menu.map((listItem) => <MenuItem item={listItem} key={listItem.to} />)}
    </div>
  );
}
export default MenuList;
