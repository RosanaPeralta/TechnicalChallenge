import { styled } from "@mui/material/styles";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Menu } from "@mui/base/Menu";

export const MenuItem = styled(BaseMenuItem)(
  () => `
  list-style: none;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  &:last-of-type {
    border-bottom: none;
  }`
);

export const MenuStyled = styled(Menu)(
  () => `
  border-radius: 40%;
  border: solid 1px red
  color: red;`
);

export const MenuButton = styled(BaseMenuButton)(
  () => `
  font-size: 14px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  line-height: 1.5;
  padding: 8px 16px;
  border: solid 1px #FFF;
  border-radius: 10%;
  color: white;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  `
);
