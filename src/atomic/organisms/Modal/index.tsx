
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

interface IModalOpen {
  edit?: boolean;
  value?: string;
  onSave?: (value: string) => void;
}

export interface IModalRef {
  open: (params: IModalOpen) => void
}


function Modal(params: IModal, ref: IModalRef) {
  const {onAdd = () => {}} = params;


  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [input, SetInput] = useState<string>("");
  const [edit, SetEdit] = useState<IModalOpen>();

  const onChange = (value: string) => {
    SetInput(value)
  }


  //@ts-ignore
  useImperativeHandle(ref, () => ({
    open(params: IModalOpen) {
      SetEdit ({
        edit: params.edit,
        value: params.value,
        onSave: params.onSave
      })
      if (params.edit && params.value) {
        SetInput(params.value)
      }      
      setIsModalVisible(true); 
    }
  }))
  
  console.log(edit);

  const handleAdd = () => {
    setIsModalVisible(false);
    if (edit?.edit && edit.onSave) {
      edit.onSave(input)
    } else {
      onAdd(input);      
    }

  };

  const handleCancel = () => {
    setIsModalVisible(false);
    SetInput("");
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
          {edit?.edit ? "Adicione novo item a lista" : "Qual item você quer adicionar a sua lista?"}
        </Typhography>

        <br/>
        <Input placeholder="Adicionar novo item" onChange={(e) => {
          onChange(e.target.value);
        }} value={input}/>

        <br/>
        <br/>
             
        <ContainerButton>

          <Button variant="neutral" onClick={handleCancel} >
            <Typhography color="neutral/3" variant="p2">
              Cancelar
            </Typhography>
          </Button>

          <Button variant="primary" onClick={handleAdd} >
            <Typhography color="neutral/4" variant="p2">
              {edit?.edit ? "Salvar" : "Adicionar"}
            </Typhography>           
          </Button>          
        </ContainerButton>

      </Container>
    </Overlay>

  );

}

//@ts-ignore
export default forwardRef(Modal);