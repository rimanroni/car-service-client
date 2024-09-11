import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import Contaxt from './contaxt/Contaxt'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contaxt>
    <RouterProvider router={router}/>
    </Contaxt>
  </StrictMode>,
)
