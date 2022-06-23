import React from 'react';
import BlueLogo from '../../../Assets/logo2.png';
import * as S from './style';
import closeIcon from '../../../Assets/closeB.svg';
import logoutIcon from '../../../Assets/logout.svg';

const DrawerMenu = ({ onClose, activesMenuItems, handleActive }) => {

  const handleClick = (item) => {
    handleActive(item);
    onClose();
  };

  return (
    <S.DrawerContainer>
      
      <S.StyledDrawerMenuWrapper>
        <S.StyledBlueLogo src={BlueLogo} alt="Opened nav bar logo" />
        <S.StyledCloseButton src={closeIcon} alt="Navbar close button" onClick={onClose} />
      </S.StyledDrawerMenuWrapper>

      <S.StyledDrawerNav>
        {activesMenuItems.map((item) => {
          return <S.DrawerMenuItem key={item.id} active={item.active} onClick={() => handleClick(item)} href="#" >{item.name}</S.DrawerMenuItem>;
        })}
      </S.StyledDrawerNav>

      <S.LogOutContainer>
        <img src={logoutIcon} alt="logout icon"/>
        <S.LogOutButton>Log out</S.LogOutButton>
      </S.LogOutContainer>

    </S.DrawerContainer>
  )
}

export default DrawerMenu;