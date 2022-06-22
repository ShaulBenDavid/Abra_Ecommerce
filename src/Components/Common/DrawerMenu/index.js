import React from 'react';
import BlueLogo from '../../../Assets/logo2.png';
import * as S from './style';
import closeIcon from '../../../Assets/close.png';

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

      <S.LogOutButton>Log out</S.LogOutButton>

    </S.DrawerContainer>
  )
}

export default DrawerMenu;