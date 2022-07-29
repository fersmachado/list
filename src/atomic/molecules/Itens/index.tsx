import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Checkbox from "../../atoms/Checkbox";
import { Container } from "./style";

interface IItens {

}

function Itens(params:IItens) {

    const [check, setCheck] = useState (false)

    const onChange = (e:{target:{ checked: boolean | ((prevState: boolean) => boolean) } }) => {
        setCheck(e.target.checked);
    }

    console.log(onChange);
    return (
        <Container> 
            <Checkbox onChange={onChange} checked={check} >
                
            </Checkbox>
            <FontAwesomeIcon icon={faTrash}/>
            <FontAwesomeIcon icon={faPen}/>


        </Container>
    )
}

export default Itens