
import { Container, Overlay, ContainerButton } from "./style";
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Typhography from "../../atoms/Typography";


interface IModal {
  title?: string;
  value?: string;
  onAdd?: (value: string) => void
}

export interface IModalRef {
  open: (params: IModal) => void
}

function Modal(params: IModal, ref: IModalRef) {
  const {onAdd = () => {} } = params;


  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [input, SetInput] = useState<string>("")

  const onChange = (value: string) => {
    SetInput(value)
  }


  //@ts-ignore
  useImperativeHandle(ref, () => ({
    open(params: IModal) {
      setIsModalVisible(true);
    }
  }))

  const handleAdd = () => {
    setIsModalVisible(false);
    onAdd(input);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isModalVisible == false) return null

  return (
    <Overlay onClick={(e) => {
      //@ts-ignore
      let isModal = e.nativeEvent.path.find(p => p.id == "Modal");
      if (!isModal) {
        handleCancel();
      }
    }}>
      <Container isModalVisible={isModalVisible} id="Modal">

        <Typhography color="primary/4" variant="p2">
          Qual item você quer adicionar a sua lista?
        </Typhography>

        <br></br>
        <Input placeholder="Adicionar novo item" onChange={(e) => {
          onChange(e.target.value);
        }} value={input}/>

        <br></br>
        <ContainerButton>

          <Button variant="neutral" onClick={handleCancel} >
            <Typhography color="neutral/3" variant="p2" >
              Cancelar
            </Typhography>
          </Button>

          <Button variant="primary" onClick={handleAdd} >
            <Typhography color="neutral/4" variant="p2">
              Adicionar
            </Typhography>           
          </Button>          
        </ContainerButton>

      </Container>
    </Overlay>

  );

}

//@ts-ignore
export default forwardRef(Modal);