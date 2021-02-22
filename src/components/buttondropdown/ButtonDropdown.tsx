import { useState } from "react";

interface Props {
  selected: string;
  setSelected: (val: string) => void;
}

const menu = ["menu 1", "menu 2", "menu 3"];
const ButtonDropdown = ({ selected, setSelected }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="btn-dropdown">
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}>
        button
      </button>
      {showMenu &&
        menu.map((eachMenu) => {
          return <div>{eachMenu}</div>;
        })}
    </div>
  );
};

export default ButtonDropdown;
