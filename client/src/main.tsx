// Library / Utils
import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Styles
import "./styles/main.scss"

// Components
import Landing from './Components/Landing.tsx'
import SimpleProb from './Components/SimpleProb.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <SimpleProb/>,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router = {router}/>

)
