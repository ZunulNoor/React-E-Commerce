import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Page404 from './pages/Page404'
import Navbor from './Components/Navbor'
import { useState } from 'react'
import Footer from './Components/Footer'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'


function App() {

  const [user, setUser] = useState(false)

  return (
    <>
      <Navbor />
      {
        user
        ?
        ( 
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/products/category/:categoryName" element={<CategoryPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        )
        :
        (
         <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Navigate to="/login" replace={true} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        )
      }
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:productID" element={<ProductPage />} />
        <Route path="/products/category/:categoryName" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Navigate to="/home" replace={true} />} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
