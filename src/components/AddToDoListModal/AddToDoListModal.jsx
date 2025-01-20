import './AddToDoListModal.css'

import ToDoListCard from '../ToDoListCard/ToDoListCard'
import { ToDoContext } from '../../App';

import { Modal, Button, ColorInput, Input, Space, Flex } from '@mantine/core';
import { useState, useContext, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';



function AddToDoListModal() {
    const [name, setName] = useState('New List')
    const [color, setColor] = useState('#000000')


    const [opened, { open, close }] = useDisclosure(false);

    const { toDoLists, setToDoLists } = useContext(ToDoContext)

    useEffect(() => {
        setName('New List')
        setColor('#000000')
    }, [opened])

    function changeName(event) {
        let text = event.target.value;

        if (text.trim() == '')
            setName('New List');
        else
            setName(event.target.value);
    }

    function addList() {
        setToDoLists((t) => ([...t, { name: name, color: color, list: [] }]))
        close();
    }


    return (<>
        <Modal opened={opened} onClose={close} title="Add a new list" size="lg">
            <div style={{ padding: '10px' }}>
                <div className="modal-content">

                    <div className="card-wrapper">
                        <ToDoListCard name={name} color={color} />
                    </div>
                    <Space h="md" />
                    <div className="input-wrapper">
                        <Input.Wrapper size="lg" label="Pick a name:" description="" error="">
                            <Input size="lg" variant="filled" placeholder="New List" onChange={changeName} />
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


        <Button variant="default" size='xl' onClick={open}>
            Add a new list
        </Button>
    </>
    );
}

export default AddToDoListModal;