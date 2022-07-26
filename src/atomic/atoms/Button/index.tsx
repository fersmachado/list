import { Container } from "./style";

export type ButtonVariant = "circle" | "primary" | "neutral"

interface IButton {
    children: string | React.ReactNode
    variant: ButtonVariant
    onClick?: () => void
}

function Button(params:IButton) {
    const {children, onClick, variant} = params;
    return (
        <Container variant={variant} onClick={onClick}>
            {children}
        </Container>
    )
    
}

export default Button;