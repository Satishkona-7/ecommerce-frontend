import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../services/productService";
import { addCartItem } from "../services/cartService";

function Products() {

  const navigate = useNavigate();

  const [products, setProducts] =
    useState([]);

  const [quantities, setQuantities] =
    useState({});

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts =
    async () => {

      try {

        const data =
          await getProducts();

        setProducts(data);

      } catch (error) {

        console.error(error);

      }
    };

  const addToCart =
    async (productId) => {

      try {

        const quantity =
          quantities[productId] || 1;

        await addCartItem(
          productId,
          quantity
        );

        alert(
          "Added to cart"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to add to cart"
        );
      }
    };

  return (
    <div>

      <h1>Products</h1>

      <button
        onClick={() =>
          navigate("/cart")
        }
      >
        View Cart
      </button>

      {
        products.map(
          (product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <h3>
                {product.name}
              </h3>

              <p>
                {product.description}
              </p>

              <p>
                ₹{product.price}
              </p>

              <input
                type="number"
                min="1"
                value={
                  quantities[
                    product.id
                  ] || 1
                }
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    [product.id]:
                      parseInt(
                        e.target.value
                      )
                  })
                }
              />

              <button
                onClick={() =>
                  addToCart(
                    product.id
                  )
                }
              >
                Add To Cart
              </button>

            </div>

          )
        )
      }

    </div>
  );
}

export default Products;