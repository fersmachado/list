import styled from "styled-components";

export const Container = styled.input`
    background: ${(props) => props.theme.colors.neutral[4]};
    height: 40px;
    border-radius: 4px;
    flex-direction: row;
    align-items: flex-start;
    border: 1px solid ${(props) => props.theme.colors.neutral[3]};
    width: 100%;
    

`