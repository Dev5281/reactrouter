import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact_us from './components/Contact_us/contact_us.jsx'
import User from './components/User/user.jsx'
import Github from './components/Github/github.jsx'
//const router = createBrowserRouter([
 // {
 //   path: '/',
 //   element: <Layout/>,
 ////   children: [
   //   {
   //     path: "",
   //     element: <Home />
   //   },
   //   {
   //     path: "about",
   //     element: <About />
   //   },
   //   {
   //     path: "contact_us",
   //     element: <Contact_us/>
   //   }
   // ]
 // }
//])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route path='' element={<Home />}/>
     <Route path='about' element={<About />}/>
     <Route path='contact_us' element={<Contact_us />}/>
     <Route path='user/:id' element={<User />}/>
     <Route path='github' element={<Github />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
