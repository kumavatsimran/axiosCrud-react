import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Form({ fetchHandle }) {
  let navigate=useNavigate();

  let [product, setProduct] = useState({})
  let handleInput = (e) => {
    let { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    fetchHandle(product)
    setProduct({})
    navigate('/')
  }

  return (
    <>
      <div className="container mt-5">
        <form method='post' onSubmit={handleSubmit} className='w-50 border p-4 m-auto rounded-4'>
          <div className="mb-3 col-6 ">
            <label for="exampleInputtitle1" className="form-label">title </label>
            <input type="text" className="form-control" id="exampleInputtitle1" aria-describedby="titleHelp" name='title' onChange={handleInput} value={product.title || ""} />
            <div id="titleHelp" className="form-text">We'll never share your title with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">price</label>
            <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleInput} name='price' value={product.price || ""} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">image</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='url' value={product.url || ""} onChange={handleInput} />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
