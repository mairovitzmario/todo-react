import './MainPage.css'
import '@mantine/core/styles.css';

import ToDoListTitle from '../../components/ToDoListTitle/ToDoListTitle'
import ToDoListCard from '../../components/ToDoListCard/ToDoListCard'
import AddToDoListModal from '../../components/AddToDoListModal/AddToDoListModal'
import { ToDoContext } from '../../App';

import { useState, useContext } from 'react';
import { Space, Flex, } from '@mantine/core';



function MainPage() {

    const { toDoLists, setToDoLists } = useContext(ToDoContext)


    return (
        <div className='wrapper'>

            <ToDoListTitle />

            <AddToDoListModal />

            <Space h='xl' />

            <Flex justify="center"
                align="center"
                direction="row"
                wrap="wrap"
                gap="xl">
                {toDoLists.map((l, index) => (
                    <ToDoListCard key={index} name={l.name} color={l.color} list={l.list} id={index} />
                ))}
            </Flex>

        </div>
    );
}


export default MainPage;