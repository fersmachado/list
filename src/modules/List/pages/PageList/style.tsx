import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    padding-top: 24px;
 
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }   
`


export const Left = styled.div`
    flex: 1;

`

export const Right = styled.div`
    flex: 1;

`

export const ContainerButtonAdd = styled.div`
    position: fixed;
    bottom: 32px;
    left: 23px;
`