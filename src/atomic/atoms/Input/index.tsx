import { ChangeEventHandler } from "react";
import { Container } from "./style";

interface IInput {
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value?: string;
}

function Input(params: IInput) {
    const { placeholder, onChange, value } = params;
    return (
        <Container
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )

}

export default Input;