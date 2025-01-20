import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import MainPage from './pages/MainPage/MainPage.jsx'



createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>

)
