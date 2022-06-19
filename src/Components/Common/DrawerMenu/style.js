import styled, { css } from 'styled-components';

export const DrawerContainer = styled.div`
    padding-left: 18px;
    position: relative;
    height: 100%;
`;

export const StyledDrawerMenuWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 51px;
    display: flex;
`;

export const StyledBlueLogo = styled.img`
`;

export const StyledCloseButton = styled.img`
    margin-left: auto;
    padding-right: 16px;
    cursor: pointer;
    height: 32px;
    width: 32px;
`;

export const StyledDrawerNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 26px;
`;

export const DrawerMenuItem = styled.a`
    flex-grow: 0;
    text-decoration: none;
    font-family: Assistant;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a223e;
    position: relative;
    padding-left: 4px;
    cursor: pointer;

    ${props => props.active === true && css`
        font-weight: 700;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 24px;
            background-color: #1a223e;
        }
    `}
`;

export const LogOutButton = styled.a`
  font-family: Assistant;
  font-size: 1rem;
  font-weight: 500;
  color: #808285;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  margin-bottom: 42px;
`;

