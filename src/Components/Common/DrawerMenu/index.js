import React from 'react';
import BlueLogo from '../../../Assets/logo2.png';
import * as S from './style';
import closeIcon from '../../../Assets/close.png';

const DrawerMenu = ({ onClose }) => {
  return (
      <S.StyledDrawerMenuWrapper>
          <S.StyledBlueLogo src={BlueLogo} alt="Opened nav bar logo" />
          <S.StyledCloseButton src={closeIcon} alt="Navbar close button" onClick={onClose}/>
      </S.StyledDrawerMenuWrapper>
  )
}

export default DrawerMenu;