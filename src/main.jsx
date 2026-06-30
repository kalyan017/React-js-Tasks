import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Parent from './Parent.jsx'
import CoonditionalRendering from './Task-3/ConditionalRendering.jsx'
import ConditionalRendering from './Task-3/ConditionalRendering.jsx'
import ListRendering from './Task-3/ListRendering.jsx'
import UseStateHook from './Task-4/UseStateHook.jsx'
import RegistrationForm from './Task-5/RegistrationForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationForm/>
  </StrictMode>
)
