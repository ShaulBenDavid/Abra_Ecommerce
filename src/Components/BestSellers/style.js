import styled from "styled-components";
import { deviceSize } from "../../constants";

export const BestSellersWrapper = styled.div`
    margin: 64px 24px;

    @media (max-width: ${deviceSize.mobile}) {
     h1 {
        text-align: center;
        font-size: 1.5rem;
     }
     margin: 36px 18px;
    }

`;

export const BestSellersCardContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 48px;
    column-gap: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        row-gap: 18px;
        column-gap: 20px;
    }
`;