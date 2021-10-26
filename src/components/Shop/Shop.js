import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displaySearched, setDisplaySearched] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [content, setContent] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&content=${content}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplaySearched(data.products);
        const totalProducts = data.count;
        const totalPages = Math.ceil(totalProducts / content);
        setPageCount(totalPages);
      });
  }, [page, content]);

  const [cart, setCart] = useCart(products);
  const handleAdd = (product) => {
    // console.log(product)
    // cart update:
    let newCart = [];
    const isExist = cart.find((pd) => pd.key === product.key);
    if (isExist) {
      const remainings = cart.filter((pd) => pd.key !== product.key);
      isExist.quantity = isExist.quantity + 1;
      newCart = [...remainings, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const sarchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplaySearched(sarchedProducts);
  };
  return (
    <>
      <div className="searchField-container">
        <input
          onChange={handleSearch}
          className="search-box"
          type="text"
          placeholder="search your favorite product i.e laptop"
        />
      </div>
      <div className="shop-container">
        <div className="products-container">
            <div className='load-content'>
                <div>
                <span>Load Products:</span>
                <button onClick={() =>setContent(10)}>10</button>
                <button onClick={() =>setContent(20)}>20</button>
                <button onClick={() =>setContent(30)}>30</button>
                <button onClick={() =>setContent(40)}>40</button>
                </div>
            </div>
          {displaySearched.map((product) => (
            <Product
              key={product.key}
              item={product}
              handleAdd={handleAdd}
            ></Product>
          ))}

          <div className='btn-group'>
            {[...Array(pageCount).keys()].map((number) => (
              <button onClick={() => setPage(number)} className={`btn-page ${number === page && 'selected'}`} key={number}>
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn-add">Review Items</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
