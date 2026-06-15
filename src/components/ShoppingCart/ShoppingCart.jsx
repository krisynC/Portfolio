import { useState } from "react";
import "./App.css";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Headphones", price: 500 },
    { id: 3, name: "Charger", price: 299 },
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="cartPage">

      <h1 className="title">Shopping Cart</h1>

      {/* PRODUCTS */ }
      <h2 className="subTitle">Products</h2>

      <div className="productList">
        { products.map((product) => (
          <div className="card" key={ product.id }>
            <h3>{ product.name }</h3>
            <p>₹{ product.price }</p>

            <button onClick={ () => addToCart(product) }>
              Add to Cart
            </button>
          </div>
        )) }
      </div>

      {/* CART */ }
      <h2 className="subTitle">Cart</h2>

      <div className="cartList">
        { cart.length === 0 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div className="cartItem" key={ index }>
              <span>
                { item.name } × { item.qty }
              </span>

              <span>₹{ item.price * item.qty }</span>

              <button onClick={ () => removeFromCart(index) }>
                Remove
              </button>
            </div>
          ))
        ) }
      </div>

      {/* TOTAL */ }
      <h3 className="total">Total: ₹{ total }</h3>

    </div>
  );
}