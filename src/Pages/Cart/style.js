import styled from "styled-components";
import Button from "../../Components/Common/Button";
import { deviceSize } from "../../constants";

export const StyledCartWrapper = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    flex-basis: 316px;
    min-width: 316px;
    padding: 40px 24px;
    position: relative;

    @media (max-width: ${deviceSize.mobile}){
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
        flex-basis: 393px;
        width: 100%;
        height: 393px;
        padding: 24px 18px;
    }
`;

export const CartTitle = styled.h2`
    font-family: Assistant;
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a223e;

    @media (max-width: ${deviceSize.mobile}) {
        text-align: center;
    }
    
`;

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 227px;

    @media (max-width: ${deviceSize.mobile}) {
        margin-top: 46px;
    }
`;


export const EmptyCartImg = styled.img`
    width: 239px;
    height: 200px;
    padding-bottom: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        width: 168px;
        height: 140px;
        padding-bottom: 16px;
    }
`;


export const EmptyCartText = styled.span`
    font-family: Assistant;
    font-size: 1rem;
    text-align: center;
    color: #000;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 0.875rem;
    }
`;

export const CartButton = styled(Button)`
    width: calc(316px - 48px);
    position: absolute;
    bottom: 40px;
    
    @media (max-width: ${deviceSize.mobile}) {
        bottom: 24px;
        width: calc(100% - 32px);
        height: 42px;
        font-size: 1.125rem;
    }
`;

