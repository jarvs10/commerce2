import styled from "styled-components";
import { BOTTOM_MENU_HEIGHT, Theme, TOP_BAR_HEIGHT } from "../../themes/theme";

export const PageWrapper = styled.div `
    margin: 0 15px;
    margin-top: ${TOP_BAR_HEIGHT}px;
    margin-bottom: ${BOTTOM_MENU_HEIGHT + 15}px;

    h1{
        font-size: 2.8rem;
        color: ${Theme.primary};
        font-weight: bold;
    }

    h3 {
        font-size: 1.5rem;
        color: ${Theme.primary};
        font-weight: bold;
    }

    h4 {
        font-size: 2rem;
        color: ${Theme.primary};
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;