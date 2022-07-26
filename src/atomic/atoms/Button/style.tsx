import styled from "styled-components";
import { ButtonVariant } from ".";

export const Container = styled.button<{variant: ButtonVariant}>`
    cursor: pointer;

    ${(props) => {
        if (props.variant == "circle") {
            return `
             background: ${props.theme.colors.primary[1]};
             color: ${props.theme.colors.neutral[4]};

             border: none;
             border-radius: 100%;
             width: 44px;
             height: 44px;

             &:hover {
                background: ${props.theme.colors.primary[2]};
             }
            

            ` 
           
        }

        if(props.variant == "primary") {
            return `
                background: ${props.theme.colors.primary[1]};
                color: ${props.theme.colors.neutral[4]};
                border-radius: 2px;
                border: none;
                height: 32px;

                &:hover {
                    background: ${props.theme.colors.primary[2]};
                }
            ` 
        }

        if(props.variant == "neutral") {
            return `
            background: ${props.theme.colors.neutral[4]};
            border: 1px solid #979797;
            border-radius: 2px;
            height: 32px;

            &:hover {
                border-color: ${props.theme.colors.primary[1]};
                color: ${props.theme.colors.primary[1]};
            }
            `
        }

    }}

`