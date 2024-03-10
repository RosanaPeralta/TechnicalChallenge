import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton, MenuItem, MenuStyled } from "./styles";

const CategoriesDropdown = ({ categories, createHandleMenuClick }: any) => {
  return (
    <Dropdown>
      <MenuButton>Categories</MenuButton>
      <MenuStyled>
        {Object.entries(categories).map((elem: any, index: number) => {
          return (
            <MenuItem
              key={index}
              onClick={() => createHandleMenuClick(elem[0])}
            >
              {elem[1]}
            </MenuItem>
          );
        })}
      </MenuStyled>
    </Dropdown>
  );
};

export default CategoriesDropdown;
