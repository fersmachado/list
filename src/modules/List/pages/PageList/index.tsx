import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRef } from "react";
import Button from "../../../../atomic/atoms/Button";
import Modal, { IModalRef } from "../../../../atomic/organisms/Modal";
import generateId from "../../../../helpers/generateId";
import ListAdd from "../../components/ListAdd";
import ListAddSelected from "../../components/ListAddSelected";
import { IItemTask } from "../../interfaces";
import { Container, ContainerButtonAdd, Left, Right } from "./style";

interface IPageList {

}

function PageList(params: IPageList) {
    const [items, setItems] = useState<IItemTask[]>([])
    const ModalRef = useRef<IModalRef>(null);

    const onOpen = () => {
        ModalRef.current?.open({})
    }

    const onAdd = (value: string) => {
        if (value == "") {
            alert("obrigatório preencher!")
        } else {
            setItems([
                ...items, {
                    value,
                    checked: false,
                    removed: false,
                    id: generateId()
                }
            ])
        }

    }

    const onEdit = (id: string) => {

    }

    const onRemove = (id: string) => {
        let filteredItems = items.filter((item) => {
            if (item.id != id) {
                return true;
            } else {
                return false;
            }
        })

        setItems(filteredItems);
    }

    const onCheck = (id: string) => {
        let newItens = items.map((item) => {
            if (item.id == id) {
                item.checked = !item.checked
                return item;
            } else {
                return item;
            }
        })

        setItems(newItens);
    }

    return (
        <Container>
            <Left>
                <ListAdd
                    items={items.filter((item) => item.checked == false )}
                    onEdit={onEdit}
                    onRemove={onRemove}
                    onCheck={onCheck}

                />
            </Left>

            <Right>
                <ListAddSelected
                    items={items.filter((item) => item.checked == true )}
                    onEdit={onEdit}
                    onRemove={onRemove}
                    onCheck={onCheck}
                />
            </Right>

            <ContainerButtonAdd>
                <Button variant="circle" onClick={onOpen} >
                    <FontAwesomeIcon icon={faAdd} />
                </Button>
            </ContainerButtonAdd>
            <Modal ref={ModalRef} title="Modal" onAdd={onAdd} />

        </Container>
    )
}

export default PageList;