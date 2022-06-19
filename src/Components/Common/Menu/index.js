import React, { Fragment, useState } from 'react';
import * as S from './style';
import Burger from '../../../Assets/menu.png';
import { useMedia } from '../../../Hooks/useMedia';
import Drawer from '../Drawer/index';
import DrawerMenu from '../DrawerMenu/index';

const Menu = ({ menuItems, humburgerResolution = 880 }) => {

    const breakPoints = [
        {min: 0, max: humburgerResolution, name: "mobile"},
        {min: humburgerResolution + 1, max: 5000, name: "desktop"}
    ];

    const [activesMenuItems, setActivesMenuItems] = useState(() => menuItems);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const breakPoint = useMedia(breakPoints);

    // Active link
    const handleActive = (item) => {
        const newActive = menuItems.map((menuItem) => {
            if (menuItem.id !== item.id) {
                menuItem.active = false;
                return menuItem;
            }
            menuItem.active = true;
            return menuItem;
        })
        setActivesMenuItems(newActive);
    }

    return (
        <S.MenuWrapper>
            {breakPoint.name === "mobile" ? 
                <Fragment>
                    <S.Hamburger src={Burger} onClick={() => setIsDrawerOpen(!isDrawerOpen)}/>
                    {isDrawerOpen && (
                        <Drawer>
                            <DrawerMenu
                                onClose={() => setIsDrawerOpen(false)}
                                activesMenuItems={activesMenuItems}
                                handleActive={handleActive}
                            />
                        </Drawer>
                    )}
                </Fragment>
                :
                activesMenuItems.map((item) => {
                    return <S.MenuItem key={item.id} active={item.active} onClick={() => handleActive(item)} href="#" >{item.name}</S.MenuItem>;
                })
            }
        </S.MenuWrapper>
  )
}

export default Menu;