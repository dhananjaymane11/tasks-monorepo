import { Menu, MenuItem } from "./TopBar.style";

export default function TopBar() {
  return (
    <Menu>
      <MenuItem to="/">Tasks</MenuItem>
      <MenuItem to="/notes">Notes</MenuItem>
      <MenuItem to="/profile">Profile</MenuItem>
    </Menu>
  );
}
