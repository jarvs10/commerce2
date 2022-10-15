import styled from "styled-components";

export const TotalWrapper = styled.div`
    margin-bottom: 2.5rem;
    label {
        display: block;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    input {
        border-radius: 6px;
        padding: 0.5rem;
    }
`;

export const FormWrapper = styled.form`
    width: 550px;
    border: 1px solid #ccc;
    padding: 1rem 0.8rem;
    border-radius: 6px;

    label {
        display: block;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    input {
        border-radius: 6px;
        width: 50%;
        padding: 0.5rem;
        margin-bottom: 2rem;
    }
`;