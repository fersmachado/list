import styled from "styled-components"
import { ColorsTypes, TypographyTypes } from "../../../styled/styled"

export const Container = styled.div<{ variant: TypographyTypes, bold: boolean, color: ColorsTypes }>`
    ${(props) => {
        let colorSplited = props.color.split("/");
        //@ts-ignore
        return `color: ${props.theme.colors[colorSplited[0]][colorSplited[1]]};`
    }}

    ${(props) => {
        if (props.variant == "h1") {
            return `
            font-size: ${props.theme.typography.h1};

            `
        }

        if (props.variant == "p1") {
            return `
            font-size: ${props.theme.typography.p1};
            `
        }

        if (props.variant == "p2") {
            return `
            font-size: ${props.theme.typography.p2};
            
            `
        }
    }}

    ${(props) => {
        if (props.bold) {
            return `font-weight: bold;`
        }
    }}
`