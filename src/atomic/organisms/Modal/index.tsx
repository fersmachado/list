
import { Container } from "./style";
import React, { useState } from 'react';
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

interface IModal {
    title: string;

}
function Modal(params:IModal) {
    const {title} = params;
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>     
        <Input text="Adicionar novo item"/>
        <Button text="Cancelar"/>
        <Button text="Adicionar" />
      
    </Container>
  );
    
}

export default Modal;