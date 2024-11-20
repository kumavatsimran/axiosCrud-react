import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';

import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Form from './component/Form';
import Product from './component/Product';
import { useState } from 'react';
import CartPage from './component/CartPage';



function App() {
  let [list, setList] = useState([])
  let [cartList, setCartList] = useState([])
  useEffect(() => {
    fetchProduct();
    getCart();
  }, []);

  let fetchHandle = async (product) => {
    try {
      console.log('enter');
      let response = await axios.post('http://localhost:3000/user', product);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    fetchProduct();
  }

  let fetchProduct = async () => {
    try {
      let products = await axios.get('http://localhost:3000/user');
      setList(products.data)
      

    } catch (error) {
      console.error(error)
    }
  }

  let handleAddCart = async (index) => {
    try {
      let product = list[index];
      await axios.post(`http://localhost:3000/Cart`, product);
      alert('add to cart')

      
      getCart();
    } catch (error) {
      console.error(error);
    }
  }

  let getCart = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/Cart`);
      setCartList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(cartList);
  let removeItemFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Cart/${id}`);
    } catch (error) {
      console.error(error);
    }
    getCart();
  }

  return (
    <>
      <BrowserRouter>
        <Navbar  count={cartList.length}  />
        <Routes>
          <Route path='/' element={<Product list={list} handleAddCart={handleAddCart} />} ></Route>
          <Route path='/Form' element={<Form fetchHandle={fetchHandle
          } />}></Route>
          <Route path='/Cart' element={<CartPage cartList={cartList} removeItemFromCart={removeItemFromCart}/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
