import { useState } from 'react'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'



const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  
  // admin router

  // {
  //   path:'/admin/companies',
  //   element:<Companies/>
  // }

])

function App() {
  

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App