import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCart } from "../services/cartService";
import { checkout } from "../services/orderService";

function Cart() {

  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {

    loadCart();

  }, []);

  const loadCart = async () => {

    try {

      const data =
        await getCart();

      setItems(data);

    } catch (error) {

      console.error(error);

    }
  };

  const placeOrder = async () => {

    try {

      const result =
        await checkout();

      alert(
      `Payment Status: ${result.payment_status}`
      );

      if (
      result.payment_status ===
      "PAID"
      ) {

      navigate("/orders");

      }

    } catch (error) {

      console.error(error);

      alert("Order Failed");

    }
  };

  const grandTotal =
    items.reduce(
      (total, item) =>
        total +
        (item.price * item.quantity),
      0
    );

  return (

    <div>

      <h1>My Cart</h1>

      {
        items.length === 0 && (
          <p>Cart is empty</p>
        )
      }

      {
        items.map((item) => (

          <div
            key={item.product_id}
            className="product-card"
          >

            <h3>
              {item.product_name}
            </h3>

            <p>
              Price: ₹{item.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Total: ₹
              {item.price * item.quantity}
            </p>

            <hr />

          </div>

        ))
      }

      {
        items.length > 0 && (

          <div>

            <h2>
              Grand Total: ₹{grandTotal}
            </h2>

            <button
              onClick={placeOrder}
            >
              Checkout
            </button>

          </div>

        )
      }

    </div>

  );
}

export default Cart;