import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.css";
import remove_icon from "../Components/Assets/cart-minus.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { all_product, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const navigate = useNavigate();

  let subtotal = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const item = all_product.find(
        (product) => product.id === Number(itemId)
      );
      if (item) {
        subtotal += item.new_price * cartItems[itemId];
      }
    }
  }

  const hasItems =
    Object.keys(cartItems).filter((id) => cartItems[id] > 0).length > 0;

  return (
    <div className="cart">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>

      {!hasItems ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="empty-cart-img"
          />
          <p>Your cart is empty. Start shopping now!</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {all_product.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <div className="cart-item" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{product.name}</h3>
                      <p className="cart-item-price">${product.new_price}</p>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            updateCartItemCount(
                              Math.max(0, cartItems[product.id] - 1),
                              product.id
                            )
                          }
                        >
                          -
                        </button>
                        <span className="quantity-badge">
                          {cartItems[product.id]}
                        </span>
                        <button
                          onClick={() =>
                            updateCartItemCount(
                              cartItems[product.id] + 1,
                              product.id
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-item-total">
                        Total: $
                        {(product.new_price * cartItems[product.id]).toFixed(2)}
                      </p>
                    </div>
                    <img
                      src={remove_icon}
                      alt="Remove"
                      className="remove-icon"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${(subtotal + 5).toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={() => navigate("/checkout")}>
              🚀 PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
