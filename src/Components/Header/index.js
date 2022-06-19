import React from 'react';
import * as S from './style';
import WhiteLogo from '../../Assets/logo.png';
import UserIcon from '../../Assets/account-circle.png';
import Menu from '../Common/Menu';

const defaultMenuConfig = [
  {id: 10,name: "Best Sellers", active: true},
  {id: 20,name: "Clothing", active: false},
  {id: 30,name: "Home", active: false},
  {id: 40,name: "Office", active: false},
  {id: 50,name: "Sports", active: false},
];


const Header = () => {
  return (
    <S.StyledHeader>
      <S.StyledLogo src={WhiteLogo} />
      <Menu menuItems={defaultMenuConfig}/>
      <S.StyledIcon src={UserIcon} />
    </S.StyledHeader>
  )
};

export default Header;