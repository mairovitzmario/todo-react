import './MainPage.css'
import '@mantine/core/styles.css';

import ToDoListTitle from '../../components/ToDoListTitle/ToDoListTitle'
import ToDoListCard from '../../components/ToDoListCard/ToDoListCard'
import AddToDoListModal from '../../components/AddToDoListModal/AddToDoListModal'

import { useState, createContext } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider, Button, Space, Flex, } from '@mantine/core';


export const ToDoContext = createContext();
function MainPage() {
    const [opened, { open, close }] = useDisclosure(false);
    const [toDoLists, setToDoLists] = useState([]);



    return (
        <MantineProvider>

            <ToDoContext.Provider value={{ toDoLists, setToDoLists }}>
                <div className='wrapper'>
                    <ToDoListTitle />

                    <AddToDoListModal opened={opened} close={close} />

                    <Button variant="default" size='xl' onClick={open}>
                        Add a new list
                    </Button>

                    <Space h='xl' />

                    <Flex justify="center"
                        align="center"
                        direction="row"
                        wrap="wrap"
                        gap="xl">
                        {toDoLists.map((l, index) => (
                            <ToDoListCard key={index} name={l.name} color={l.color} list={l.list} />
                        ))}
                    </Flex>

                </div>
            </ToDoContext.Provider>

        </MantineProvider>
    );
}


export default MainPage;