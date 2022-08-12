import styled from "styled-components"

export const Container = styled.input`
    width: 15px;
    height: 15px;
    border-radius: 1px;
    background: ${(props) => props.theme.colors.primary[2]};
    border: 1px solid ${(props) => props.theme.colors.neutral[3]};

    &::selection{
        background: ${(props) => props.theme.colors.primary[1]};
    }
  
`