import React, { useContext, useMemo } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Cart.css";

const Checkout = () => {
  const { all_product, cartItems } = useContext(ShopContext);

  const subtotal = useMemo(() => {
    let s = 0;
    for (const itemId in cartItems) {
      const qty = cartItems[itemId];
      if (qty > 0) {
        const item = all_product.find((p) => p.id === Number(itemId));
        if (item) s += item.new_price * qty;
      }
    }
    return s;
  }, [all_product, cartItems]);

  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart" style={{ paddingTop: 30 }}>
      <h1 className="cart-title">Checkout</h1>
      <div className="cart-summary" style={{ margin: "0 auto", maxWidth: 600 }}>
        <h2>Order Summary</h2>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-button" style={{ marginTop: 24 }} onClick={() => alert("Order flow not implemented. This is a demo checkout page.")}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
