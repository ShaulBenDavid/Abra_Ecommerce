import styled from "styled-components";
import Button from "../../Components/Common/Button";

export const StyledCartWrapper = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    flex-basis: 316px;
    min-width: 316px;
    padding: 40px 24px;
    position: relative;
`;

export const CartTitle = styled.h2`
    font-family: Assistant;
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a223e;
`;

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 227px;
`;


export const EmptyCartImg = styled.img`
    width: 239px;
    height: 200px;
    padding-bottom: 24px;
`;


export const EmptyCartText = styled.span`
    font-family: Assistant;
    font-size: 1rem;
    text-align: center;
    color: #000;
`;

export const CartButton = styled(Button)`
    width: calc(316px - 48px);
    position: absolute;
    bottom: 40px;
`;

