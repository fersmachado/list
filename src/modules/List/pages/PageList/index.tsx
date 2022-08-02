import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRef } from "react";
import Button from "../../../../atomic/atoms/Button";
import Modal, { IModalRef } from "../../../../atomic/organisms/Modal";
import ListAdd from "../../components/ListAdd";
import ListAddSelected from "../../components/ListAddSelected";
import { Container, ContainerButtonAdd, Left, Right } from "./style";

interface IPageList {

}

function PageList(params: IPageList) {
    const [item, setItem] = useState ([])

    const ModalRef = useRef<IModalRef>(null);
    const onOpen = () => {
        ModalRef.current?.open({})
    }

    const onAdd = (value: string) => {
        if (value == ""){
            alert("obrigatório preencher!")
        } else {
            setItem([
                ...item, {
                    value
                }
            ])
        }
        
    }
    console.log(onAdd)

    return (
        <Container>
            <Left>
                <ListAdd />
            </Left>

            <Right>
                <ListAddSelected />
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