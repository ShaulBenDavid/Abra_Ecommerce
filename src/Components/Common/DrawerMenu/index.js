import React from "react";

import MenuLink from "../MenuLink";
import * as S from "./style";
import BlueLogo from "../../../Assets/logo2.png";
import closeIcon from "../../../Assets/closeB.svg";
import logoutIcon from "../../../Assets/logout.svg";

const DrawerMenu = ({ onClose, menuItems, handleNavigate }) => {
  const handleClick = (item) => {
    handleNavigate(item);
    onClose();
  };

  return (
    <S.DrawerContainer>
      <S.StyledDrawerMenuWrapper>
        <S.StyledBlueLogo src={BlueLogo} alt="Opened nav bar logo" />
        <S.StyledCloseButton
          src={closeIcon}
          alt="Navbar close button"
          onClick={onClose}
        />
      </S.StyledDrawerMenuWrapper>

      <S.StyledDrawerNav>
        {menuItems.map((item) => {
          return (
            <MenuLink
              key={item.id}
              onClick={() => handleClick(item)}
              item={item}
              typeLink="drawer"
            />
          );
        })}
      </S.StyledDrawerNav>

      <S.LogOutContainer>
        <img src={logoutIcon} alt="logout icon" />
        <S.LogOutButton>Log out</S.LogOutButton>
      </S.LogOutContainer>
    </S.DrawerContainer>
  );
};

export default DrawerMenu;
