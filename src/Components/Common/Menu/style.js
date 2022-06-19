import styled, {css} from 'styled-components';

export const MenuItem = styled.a`
    font-size: 1.25rem;
    font-weight: 500;
    color: #fff;
    position: relative;

    ${props => props.active === true && css`
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 40px;
            transform: translate(-50%, 0);
            width: 80%;
            height: 2px;
            background-color: #fff;
        }
    `}
`;

export const MenuWrapper = styled.nav`
    display: flex;
    font-family: Assistant;
    gap: 26px;

`;

export const Hamburger = styled.img`
`;
