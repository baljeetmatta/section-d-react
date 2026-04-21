import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Forms from './Forms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Forms />
  </StrictMode>,
)
