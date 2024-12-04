import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import About from "./components/About.jsx";
import Goals from "./components/Goals.jsx";
import Mission from "./components/Mission.jsx";
import Items from "./components/items/Items.jsx";
import Index from "./components/Index.jsx";
import EditItemForm from "./components/items/EditItemForm.jsx";
import NotFound from "./components/Not Found.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="goals" element={<Goals />} />
        <Route path="mission" element={<Mission />} />
        <Route path="items" element={<Items />} />
        <Route path="items/edit/:id" element={<EditItemForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
