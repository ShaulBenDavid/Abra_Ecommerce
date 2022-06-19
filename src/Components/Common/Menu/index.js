import React from 'react';
import * as S from './style';


const Menu = ({ menuItems }) => {
    

  return (
      <S.MenuWrapper>
          {menuItems.map((item) => {
              return <S.MenuItem key={item.id}>{item.name}</S.MenuItem>;
          })}
      </S.MenuWrapper>
  )
}

export default Menu;