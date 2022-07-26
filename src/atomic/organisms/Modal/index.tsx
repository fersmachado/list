
import { Container, Overlay } from "./style";
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Typhography from "../../atoms/Typography";

interface IModal {
  title?: string;
}

export interface IModalRef {
  open: (params: IModal) => void
}

function Modal(p: IModal, ref: IModalRef) {

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
        <Typhography color="primary/4" bold variant="p2">
          Qual item você quer adicionar a sua lista?
        </Typhography>
        <Input placeholder="Adicionar novo item" onChange={(e) => {
          onChange(e.target.value);

        }} value={input} />
        <Button variant="neutral" onClick={handleCancel}  >
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleAdd} >
          Adicionar
        </Button>
      </Container>
    </Overlay>

  );

}

//@ts-ignore
export default forwardRef(Modal);