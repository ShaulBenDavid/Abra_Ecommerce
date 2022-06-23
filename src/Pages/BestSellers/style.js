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
