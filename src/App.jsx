import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Carts from './Components/Cart/Cart'
import HomePage from './Pages/Homepage/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Contact from './Pages/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Products from './Pages/Products'

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <Navbar />

      <div className="content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Carts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

