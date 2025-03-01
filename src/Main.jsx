import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from "./Router";
import './styles/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
