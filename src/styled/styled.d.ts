// styled.d.ts
import 'styled-components';

type TypographyTypes =
    "h1"|
    "p1"|
    "p2" 
    

interface ITypography {
    "h1": string
    "p1": string
    "p2": string
}

type ColorsTypes =
"primary/1" | "primary/2" |  "primary/3" |  "primary/4" |
"neutral/1" | "neutral/2" |  "neutral/3" |  "neutral/4"

interface IColors {
    primary: {
        1: string
        2: string
        3: string
        4: string
    }
    neutral: {
        1: string
        2: string
        3: string
        4: string
    }
}

interface IIcons {
    "h1": string
    "p1": string
    "c1": string
}

declare module 'styled-components' {

    export interface DefaultTheme {
        colors: IColors
        typography: ITypography
        icons: IIcons
    }

}