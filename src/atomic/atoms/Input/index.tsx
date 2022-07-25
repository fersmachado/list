import { Container } from "./style";

interface IInput {
    text: string;
}

function Input(params:IInput) {
    const {text} = params;
    return (
        <Container>
            {text}
        </Container>
    )
    
}

export default Input;