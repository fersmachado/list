import { faAdd } from "@fortawesome/free-solid-svg-icons";
//@ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { useState } from "react";
import { useRef } from "react";
import Button from "../../../../atomic/atoms/Button";
import Modal, { IModalRef } from "../../../../atomic/organisms/Modal";
import generateId from "../../../../helpers/generateId";
import ListAdd from "../../components/ListAdd";
import ListAddSelected from "../../components/ListAddSelected";
import { TaskContext } from "../../contexts/TaskContext";
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
        let item = items.find((item) => item.id == id)
        ModalRef.current?.open({
            edit: true,
            value: item?.value,
            onSave: (value: string) => {
                let newItems = items.map((item) => {
                    if (item.id == id) {
                        item.value = value
                        return item;
                    } else {
                        return item;
                    }

                })

                setItems(newItems);
            }
        })

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
        <TaskContext.Provider value={{
            items,
            onCheck,
            onEdit,
            onRemove
        }}>
            <Container>
                <Left>
                    <ListAdd />
                </Left>
                <Right>
                    <ListAddSelected />
                </Right>
                <ContainerButtonAdd>
                    <Button variant="circle" onClick={onOpen} >
                        <FontAwesomeIcon icon={faAdd} style={{ fontSize: "30px" }} />
                    </Button>
                </ContainerButtonAdd>
                <Modal ref={ModalRef} title="Modal" onAdd={onAdd} />
            </Container>
        </TaskContext.Provider>
    )
}

export default PageList;