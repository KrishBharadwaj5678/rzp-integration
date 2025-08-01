import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Success from "./pages/Success.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/paymentSuccess" element={<Success />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
