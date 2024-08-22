import { useState, useEffect } from "react";
import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import {add} from '../store/cartSlice'
import {getProducts} from '../store/productSlice'

function Product() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProducts())
  }, []);

  
  const cartItems = useSelector((state) => state.cart);
  const {data} = useSelector((state) => state.products);
  let products = data ;
  console.log("products" , products)

  const addProduct = (product) => {
    console.log('action dispatched' ,product)
    dispatch(add(product));
    console.log("completed")
    console.log('cart items ',cartItems)
  }
  


  return (
    <div>
      <h1>Product dashboard</h1>
      <div className="container-fluid">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 my-2">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top mx-auto"
                  style={{ width: "100px", height: "130px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">INR : {product.price}</p>
                </div>
                <div className="card-footer text-center bg-white border-0">
                <button  className="btn btn-outline-success w-100" onClick={() => addProduct(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
