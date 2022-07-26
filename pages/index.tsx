import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import { useRef } from 'react'
import Button from '../src/atomic/atoms/Button'
import Modal, { IModalRef } from '../src/atomic/organisms/Modal'



const Home: NextPage = (props, ref) => {
    const ModalRef = useRef<IModalRef>(null);
    const onClick = () => {
        ModalRef.current?.open({})
    }
    return (
        <div>
            <Button variant="circle" onClick={onClick} >
                <FontAwesomeIcon icon={faAdd} />
            </Button>
            <Modal ref={ModalRef} title="Modal" />
        </div>
    )
}



export default Home
