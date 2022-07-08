import React from "react";
import { useResolvedPath, useMatch } from "react-router-dom";

import { MenuItem } from "./style";

const MenuLink = ({ item, ...otherprops }) => {
  const { name, path } = item;

  const resolvePath = useResolvedPath(path);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <MenuItem active={isActive ? true : false} {...otherprops}>
      {name}
    </MenuItem>
  );
};

export default MenuLink;
