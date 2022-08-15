import { ChangeEventHandler } from "react";
import { Container, Content } from "./style";

interface ICheckbox {
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    children: string | React.ReactNode

}

function Checkbox(params: ICheckbox) {
    const { onChange, checked, children } = params;
    return (
        <Container>
            <Content onChange={onChange} checked={checked} type="checkbox" />
            <label>{children}</label>
        </Container>


    )
}

export default Checkbox;