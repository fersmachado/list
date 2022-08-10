import styled from "styled-components"

export const Container = styled.li`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 8px;

    
`

export const ContentCheckbox = styled.div`
    gap: 16px;
    display: flex;
    
    
`

export const ContentIcon = styled.div`
    color: ${(props) => props.theme.colors.neutral[3]};
    
    &:hover {color: ${(props) => props.theme.colors.primary[2]}};
    
`

