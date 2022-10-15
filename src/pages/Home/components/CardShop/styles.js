import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardShopWrapper = styled(Link) `
    display: flex;
    margin: 12px 0px;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 6px;
    text-decoration: none;
    &:hover {
        background-color: #f6f6f6;
        -webkit-box-shadow: 2px 1px 10px 0px rgba(99,99,99,1);
        -moz-box-shadow: 2px 1px 10px 0px rgba(99,99,99,1);
        box-shadow: 2px 1px 10px 0px rgba(99,99,99,1);
    }
`;

export const CardShopImage = styled.div `
    img {
        width: 80px;
    }
`;

export const CardShopContent = styled.div `
    flex: 1;
    margin: 0 8px;
    color: #222;

    h4 {
        margin: 8px 0;
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
    }

    span {
        font-weight: 400;
    }
`;