import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DeckGameYugi from './assets/pages/DeckGameYugi'
import Home from './assets/pages/_Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/deck-game-Yugi',
    element: <DeckGameYugi />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />


)