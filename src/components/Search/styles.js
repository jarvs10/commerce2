import styled from 'styled-components';
//import { Theme } from '../../themes/theme';

export const SearchWrapper = styled.section `
    width: 100%;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 1em;
    padding: 6px 10px;
`;

export const SearchClearWrapper = styled.div`
    cursor: pointer;
    padding: 0 4px;
    display: flex;
    align-items: center;
    svg {
        color: ${ props => props.hasText ? '#222' : '#ccc'} ;
    }
`;