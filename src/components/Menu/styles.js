import styled from "styled-components";
import { BOTTOM_MENU_HEIGHT, Theme } from "../../themes/theme";

export const MenuWrapper = styled.section`
    border-top: 2px solid #ccc;
    position: fixed;
    width: 100%;
    height: ${BOTTOM_MENU_HEIGHT}px;
    background-color: white;
    display: flex;
    bottom: 0;
    left: 0;
    a {
        flex: 1;
        text-decoration: none;
    }
`;

export const ItemMenuWrapper = styled.div`
    border-left: 1px solid #ccc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    svg {
        color: ${Theme.secondary};
        font-size: 1.5em;
    }
    
    p {
        color: ${Theme.secondary};
    }

    &:hover {
        cursor: pointer;
        background-color: ${Theme.secondary};
        svg { color: #fff}
        p { color: #fff}
    }
`;