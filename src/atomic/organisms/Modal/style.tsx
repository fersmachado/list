import styled from "styled-components";

export const Container = styled.div<{ isModalVisible: boolean }>`
    

    background: ${(props) => props.theme.colors.primary[2]};
    width: 316px;
    height: 181px;
    padding: 12px;
    border-radius: 2px;



    ${(props) => {
        if (props.isModalVisible == true) {
            return `
            display: block`;
        } else {
            return `
            display: none`;
        }

    }}

`

export const Overlay = styled.div`
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
` 

