import styled from "styled-components";

export const ProductsGrid = styled.section`
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
        justify-content: unset;
    }
    flex-wrap: wrap;
    margin: 10px 0;
`;