import styled from "styled-components"

export const Container = styled.input`
    display: flex;
    width: 16px;
    height: 16px;
    border-radius: 1px;
    background: ${(props) => props.theme.colors.neutral[4]};
    border: 1px solid ${(props) => props.theme.colors.neutral[3]};

    &::selection{
        background: ${(props) => props.theme.colors.primary[1]};
    }
  
`