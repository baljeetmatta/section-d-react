import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Forms from './Forms.tsx'
import ReactForms from './ReactForms.tsx'
import HookForm from './HookForm.tsx'
import { Provider } from 'react-redux'
import store from "./reduxStore.ts"
import ProductDetails from './ProdutDetails.tsx'
import Products from './Products.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
 ,
)
