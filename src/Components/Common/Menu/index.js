import React, { Fragment, useState } from "react";
import { useMedia } from "../../../Hooks/useMedia";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

import Burger from "../../../Assets/menu.png";
import Drawer from "../Drawer/index";
import DrawerMenu from "../DrawerMenu/index";
import MenuLink from "../MenuLink";

const Menu = ({ menuItems, humburgerResolution = 880 }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(() => false);

  const breakPoints = [
    { min: 0, max: humburgerResolution, name: "mobile" },
    { min: humburgerResolution + 1, max: 5000, name: "desktop" },
  ];

  const breakPoint = useMedia(breakPoints);

  const navigate = useNavigate();

  // Active link
  const handleNavigate = (item) => {
    navigate(item.path);
  };

  return (
    <S.MenuWrapper>
      {breakPoint.name === "mobile" ? (
        <Fragment>
          <S.Hamburger
            src={Burger}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          {isDrawerOpen && (
            <Drawer>
              <DrawerMenu
                menuItems={menuItems}
                onClose={() => setIsDrawerOpen(false)}
                handleNavigate={handleNavigate}
              />
            </Drawer>
          )}
        </Fragment>
      ) : (
        menuItems.map((item) => (
          <MenuLink
            key={item.id}
            item={item}
            onClick={() => handleNavigate(item)}
          />
        ))
      )}
    </S.MenuWrapper>
  );
};

export default Menu;
