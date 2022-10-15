import styled from 'styled-components';
import { Theme } from '../../themes/theme';

export const TopbarWrapper = styled.div`
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    background-color: ${Theme.primary};
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    align-items: center;
`;

export const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    svg {
      color: white;
      font-size: 2em;
    }
`;

export const CartQuanty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: white;
    p {
      color: ${Theme.secondary};
      margin: 0;
      padding: 0;
      font-weight: 700;
    }
`;