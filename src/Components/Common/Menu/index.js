import React from 'react';
import * as S from './style';
import Burger from '../../../Assets/menu.png';
import { useMedia } from '../../../Hooks/useMedia';

const Menu = ({ menuItems, humburgerResolution = 880 }) => {

    const breakPoints = [
        {min: 0, max: humburgerResolution, name: "mobile"},
        {min: humburgerResolution + 1, max: 5000, name: "desktop"}
    ];

    const breakPoint = useMedia(breakPoints);


    return (
        <S.MenuWrapper>
            {breakPoint.name === "mobile" ? 
                <S.Hamburger src={Burger}/>
                :
                menuItems.map((item) => {
                    return <S.MenuItem key={item.id} active={item.active}>{item.name}</S.MenuItem>;
                })
            }
        </S.MenuWrapper>
  )
}

export default Menu;