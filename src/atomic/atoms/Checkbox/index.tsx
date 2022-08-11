import { ChangeEventHandler } from "react";
import { Container } from "./style";

interface ICheckbox {
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    children: string | React.ReactNode

}

function Checkbox(params: ICheckbox) {
    const { onChange, checked, children } = params;
    return (
        <div>
            <Container onChange={onChange} checked={checked} type="checkbox" />
            <label >{children}</label>
        </div>


    )
}

export default Checkbox;