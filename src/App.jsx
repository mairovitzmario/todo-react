import '@mantine/core/styles.css';

import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import { MantineProvider } from '@mantine/core';

import MainPage from './pages/MainPage/MainPage.jsx'
import ToDoListPage from './pages/ToDoListPage/ToDoListPage.jsx'


export const ToDoContext = createContext();

function App() {
    const [toDoLists, setToDoLists] = useState([]);


    return (
        <MantineProvider>
            <ToDoContext.Provider value={{ toDoLists, setToDoLists }}>


                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<MainPage />} />

                        <Route path='/list/:id' element={<ToDoListPage />} />

                    </Routes>
                </BrowserRouter>


            </ToDoContext.Provider>
        </MantineProvider>
    );
}


export default App;