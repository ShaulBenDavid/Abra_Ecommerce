import React, { Fragment, useEffect, useState } from 'react';
import * as S from './style';
import Burger from '../../../Assets/menu.png';


const Menu = ({ menuItems, humburgerResolution = 880 }) => {

    const breakPoints = [
        {min: 0, max: humburgerResolution, name: "mobile"},
        {min: humburgerResolution + 1, max: 1000, name: "desktop"}
    ];

    const getCurrentBreakPoint = () => {
        const currentWidth = window.innerWidth;

        for (const breakpoint of breakPoints) {
            if (currentWidth >= breakpoint.min &&
                currentWidth <= breakpoint.max) {
                return breakpoint;
            }
        }
        return undefined;
    };

    const [currentBreakPoint, setCurrentBreakPoint] = useState(getCurrentBreakPoint);

    console.log(currentBreakPoint)

    const isChange  = (breakPoint) => {
        if (breakPoint && (currentBreakPoint === undefined || breakPoint.name !== currentBreakPoint.name)) {
            return true;
        } else {
            return false;
        }
    };

    const onResize = () => {
        const breakPoint = getCurrentBreakPoint;
        
        if (isChange(breakPoint)) {
            setCurrentBreakPoint(breakPoint);
        }
    };
    
    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);

    }, []);

    return (
      <Fragment>
        <S.MenuWrapper>
            {menuItems.map((item) => {
                return <S.MenuItem key={item.id} active={item.active}>{item.name}</S.MenuItem>;
            })}
            </S.MenuWrapper>
            <S.Hamburger src={Burger}/>
      </Fragment>
  )
}

export default Menu;