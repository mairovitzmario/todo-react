import './AddToDoListModal.css'

import ToDoListCard from '../ToDoListCard/ToDoListCard'

import { Modal, Button, ColorInput, Input, Space, Flex } from '@mantine/core';
import { useState, useContext } from 'react';
import { ToDoContext } from '../../pages/MainPage/MainPage';


function AddToDoListModal({ opened, close }) {
    const [name, setName] = useState('New List')
    const [color, setColor] = useState('#000000')

    const { toDoLists, setToDoLists } = useContext(ToDoContext)

    function changeName(event) {
        setName(event.target.value);
    }

    function addList() {
        setToDoLists((t) => ([...t, { name: name, color: color, list: [] }]))
        close();
    }


    return (
        <Modal opened={opened} onClose={close} title="Add a new list" size="lg">
            <div style={{ padding: '10px' }}>
                <div className="modal-content">
                    <div className="card-wrapper">
                        <ToDoListCard name={name} color={color} />
                    </div>
                    <div className="input-wrapper">
                        <Input.Wrapper size="lg" label="Pick a name:" description="" error="">
                            <Input size="lg" variant="filled" placeholder="New List" value={name} onChange={changeName} />
                        </Input.Wrapper>

                        <Space h="md" />

                        <ColorInput size="lg" variant="filled" label="Choose a color:" value={color} onChange={setColor} />

                        <Space h="lg" />

                        <Button fullWidth variant="default" size="md" onClick={addList}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default AddToDoListModal;