import styled from "styled-components";
import { Theme } from "../../themes/theme";

export const ProductWrapper = styled.div`
    width: 150px;
    margin: 6px 8px;
    border: 1px solid ${Theme.primary_text};
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin: 10px 0;
        font-weight: 400;
    }
    h2 {
        margin: 8px 0;
    }
`;