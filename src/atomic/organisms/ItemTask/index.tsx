import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { IItemTask } from "../../../modules/List/interfaces";
import Checkbox from "../../atoms/Checkbox";
import { Container, ContentCheckbox, ContentIcon } from "./styled";

interface _IItemTask {
    item: IItemTask
    onEdit: (id: string) => void
    onRemove: (id: string) => void
    onCheck: (id: string) => void
}

function ItemTask(params: _IItemTask) {
    const { item, onEdit, onRemove, onCheck } = params;

    return (
        <Container>
            <ContentCheckbox>
                <Checkbox checked={item.checked} onChange={() => onCheck(item.id)} >
                    {item.value}
                </Checkbox>
            </ContentCheckbox>

            <ContentIcon>
                <FontAwesomeIcon icon={faTrash} onClick={() => onRemove(item.id)} />
                <FontAwesomeIcon icon={faPen} onClick={() => onEdit(item.id)}/>
            </ContentIcon>
            
            
        </Container>
    )
}

export default ItemTask;


