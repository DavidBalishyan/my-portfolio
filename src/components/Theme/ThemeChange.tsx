import React from "react";
import thmch from "/g.svg";
import ThemeToggleComponent from "./ThmCmp.tsx"
const ThemeChangeComponent: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full flex align-middle justify-center">
            <img src={thmch}/>

        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <ThemeToggleComponent />
      </ul>
    </div>
  );
};

export default ThemeChangeComponent;
