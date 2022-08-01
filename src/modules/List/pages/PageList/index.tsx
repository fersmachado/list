import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Button from "../../../../atomic/atoms/Button";
import Modal, { IModalRef } from "../../../../atomic/organisms/Modal";
import ListAdd from "../../components/ListAdd";
import ListAddSelected from "../../components/ListAddSelected";
import { Container, ContainerButtonAdd, Left, Right } from "./style";

interface IPageList {

}

function PageList(params: IPageList) {
    //a logica fica nesse carinha :D
    const ModalRef = useRef<IModalRef>(null);
    const onAdd = () => {
        ModalRef.current?.open({})
    }

    return (
        <Container>
            <Left>
                <ListAdd />
            </Left>

            <Right>
                <ListAddSelected />
            </Right>

            <ContainerButtonAdd>
                <Button variant="circle" onClick={onAdd} >
                    <FontAwesomeIcon icon={faAdd} />
                </Button>
            </ContainerButtonAdd>
            <Modal ref={ModalRef} title="Modal" />

        </Container>
    )
}

export default PageList;