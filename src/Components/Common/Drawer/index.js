import * as S from './style';
import * as ReactDOM from 'react-dom';
import React from 'react';

const Drawer = ({children}) => {

    console.log(children);

    return ReactDOM.createPortal(
        <S.StyledPageWarrper>
            <S.StyledDrawer>
                {children}
            </S.StyledDrawer>
        </S.StyledPageWarrper>,document.body
    );
}

export default Drawer;