import { ColorsTypes, TypographyTypes } from "../../../styled/styled";
import { Container } from "./style";

interface ITypography {
    variant: TypographyTypes
    children: string
    bold?: boolean
    color: ColorsTypes
}

function Typography(params: ITypography) {
    const { children, variant, bold = false, color = "neutral/4" } = params;
    return (
        <Container variant={variant} bold={bold} color={color}>
            {children}
        </Container>
    )
}

export default Typography;