import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ROUTES from './Routes/routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainContext from './context/context';
import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  const router = createBrowserRouter(ROUTES)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(res => {
      setData([...res.data])
      setLoading(false)
    }).catch(error => {
      setError(error)
      setLoading(false)
    })
  }, [])
  const contextData = {
    data, setData, loading, setLoading, error, setError
  }

  return (
    
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
};

export default App;
