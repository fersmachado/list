import styled from "styled-components";

export const Container = styled.div`
    padding: 32px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }   
`

export const Left = styled.div`
    flex: 2;
`

export const Right = styled.div`
    flex: 2;
`

export const ContainerButtonAdd = styled.div`
    position: fixed;
    bottom: 32px;
`