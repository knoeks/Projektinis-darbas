import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import NotFound from "./components/Not Found.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes path="/" element={<App />}>
    <Route index element={<App />} />
      <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
