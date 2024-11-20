import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ list, handleAddCart }) {
  let [productList, setProductList] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [search, setSearch] = useState('');
  let [sortBy, setSortBy] = useState('');


  useEffect(() => {
    setProductList(list);
  }, [list]);

  let perPage = 8;
  let last = currentPage * perPage;
  let first = last - perPage;

  let filteredList = productList.filter((val) =>
    val.title.toLowerCase().includes(search.toLowerCase()) ||
    val.price.toString().includes(search.toLowerCase())
  );

  if (sortBy === 'price-asc') {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredList.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'title-asc') {
    filteredList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'title-desc') {
    filteredList.sort((a, b) => b.title.localeCompare(a.title));
  }

  let currentItem = filteredList.slice(first, last);
  let totalPage = Math.ceil(filteredList.length / perPage);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container">
        <div className="m-auto w-50 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or price"
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="m-auto w-50 mb-3">
          <select className="form-control" value={sortBy} onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="title-desc">Title: Z-A</option>
          </select>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">titl</th>
              <th scope="col">price</th>
              <th scope="col">url</th>
              <th scope="col">action</th>


            </tr>
          </thead>
          <tbody>
            {currentItem.map((val, i) => (

              <tr>
                <th scope="row">{i + 1}</th>
                <td> <img src={val.url} className="card-img-top w-25" alt="..." /></td>
                <td>{val.title}</td>
                <td>Rs: {val.price}</td>
                <td><button className="btn btn-primary" onClick={() => handleAddCart(i)}>
                  Add to cart
                </button></td>
              </tr>
            ))}



          </tbody>
        </table>

        <div className="w-75 row m-auto">
         

          <div className="pagination-buttons">
            {[...Array(totalPage)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-primary w-25 m-auto">
              Prev
            </button>
          )}

          {currentPage < totalPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-primary w-25 m-auto">
              Next
            </button>
          )}
        </div>
      </div>
     
    </>
  );
}

export default Product;
