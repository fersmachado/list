import { Container } from "./style";

interface IButton {
    text: string;
}

function Button(params:IButton) {
    const {text} = params;
    return (
        <Container>
            {text}
        </Container>
    )
    
}

export default Button;