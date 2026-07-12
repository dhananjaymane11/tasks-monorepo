import { Menu, MenuItem } from "./TopBar.style";

export default function TopBar() {
  return (
    <Menu>
      <MenuItem screen="home">Tasks</MenuItem>
      <MenuItem screen="notes">Notes</MenuItem>
      <MenuItem screen="profile">Profile</MenuItem>
    </Menu>
  );
}
