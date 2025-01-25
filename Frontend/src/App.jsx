import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from './router'
import{ Toaster } from 'react-hot-toast';

const App = () => {
  return (
   <>
    <Toaster/>
    <Routes>
      {router.map((item, index) => {
        return (<Route key={index} path={item?.path} element={item?.component} />)
      })}
    </Routes>
   </>
  )
}

export default App