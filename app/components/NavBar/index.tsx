import logo from "./bonuscasinosk.svg";
import { Dropdown, DropdownItem } from "./Dropdown";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="h-6 w-auto" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Dropdown title="Slovenské kasína online">
            <DropdownItem>Grand Mondial Casino</DropdownItem>
            <DropdownItem>Luxury Casino</DropdownItem>
            <DropdownItem>Zodiac Casino</DropdownItem>
            <DropdownItem>Villento Casino</DropdownItem>
            <DropdownItem>Players Palace Casino</DropdownItem>
          </Dropdown>
          <Dropdown title="Kasínové mobilné aplikácie">
            <DropdownItem>Grand Mondial Casino App</DropdownItem>
            <DropdownItem>Luxury Casino App</DropdownItem>
            <DropdownItem>Zodiac Casino App</DropdownItem>
            <DropdownItem>Villento Casino App</DropdownItem>
            <DropdownItem>Players Palace Casino App</DropdownItem>
          </Dropdown>
        </ul>
      </div>
    </div>
  );
}

export default NavBar
