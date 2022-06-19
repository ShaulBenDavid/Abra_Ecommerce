import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #1a223e;
    display: flex;
    padding: 21px 0px;
    padding-left: 64px;
    align-items: flex-end;

    @media (max-width: 880px) {
        padding-left: 18px;
    }
`;


export const StyledLogo = styled.img`
    padding-right: 98px;
    align-self: center;
`;

export const StyledIcon = styled.img`
    align-self: center;
    margin-left: auto;
    padding-right: 24px;
`;