import styled from "styled-components";
import { BOTTOM_MENU_HEIGHT, TOP_BAR_HEIGHT } from "../../themes/theme";

export const PageWrapper = styled.div `
    margin: 0 15px;
    margin-top: ${TOP_BAR_HEIGHT}px;
    margin-bottom: ${BOTTOM_MENU_HEIGHT + 15}px;
`;