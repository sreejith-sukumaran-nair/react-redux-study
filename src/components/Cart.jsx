import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice'

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  const dispatch = useDispatch()
  const removeFromCart = (id) => {
      dispatch(remove(id))
  }
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
          {cartItems.map((product) => (
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
                <button  className="btn btn-outline-danger w-100" onClick={(e) => removeFromCart(product.id)}>
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart