import React from 'react';
import * as S from './style';
import WhiteLogo from '../../Assets/logo.png';
import UserIcon from '../../Assets/account-circle.png';
import Menu from '../Common/Menu';

const defaultMenuConfig = [
  {id: 1,name: "Best Sellers"},
  {id: 2,name: "Clothing"},
  {id: 3,name: "Home"},
  {id: 4,name: "Office"},
  {id: 5,name: "Sports"},
];


const Header = () => {
  return (
      <S.StyledHeader>
        <S.StyledLogo src={WhiteLogo} />
        <Menu menuItems={defaultMenuConfig}></Menu>
        <S.StyledIcon src={UserIcon}/>
      </S.StyledHeader>
  )
}

export default Header;