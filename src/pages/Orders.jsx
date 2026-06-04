import { useEffect, useState } from "react";

import { getOrders }
from "../services/ordersService";

function Orders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders =
    async () => {

      try {

        const data =
          await getOrders();

        setOrders(data);

      } catch (error) {

        console.error(error);

      }
    };

  return (

    <div>

      <h1>
        My Orders
      </h1>

      {
        orders.length === 0 &&
        (
          <p>
            No orders found
          </p>
        )
      }

      {
        orders.map(
          (order) => (

            <div
              key={order.id}
              className="product-card"
            >

              <h3>
                Order ID
              </h3>

              <p>
                {order.id}
              </p>

              <p>
                Amount:
                ₹{order.total_amount}
              </p>

              <p>
                Status:
                {order.status}
              </p>

              <hr />

            </div>

          )
        )
      }

    </div>

  );
}

export default Orders;