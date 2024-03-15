import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./products.json";
import { Navbar } from "./navbar";

export const Eachcategory = () => {
  const addToCart = (item) => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      const previousItems = JSON.parse(cart);
      localStorage.setItem("cart", JSON.stringify([...previousItems, item]));
    }
  };
  const params = useParams();
  const category = params.name;
  console.log(category);
  const [pageData, setPageData] = useState([]);

  const getCategory = () => {
    const data = products.filter((item) => {
      return item.category.toUpperCase() === category.toUpperCase();
    });

    setPageData(data);
  };

  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getCategory();
  }, [params.name]);
  return (
    <div>
      <Navbar></Navbar>
      <h4 className="text-center mt-4">{category.toUpperCase()}</h4>
      <div className="mt-5 row row-gap-3">
        {pageData.map((item) => {
          return (
            <div className="col-md-4">
              <div class="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  style={{ height: "200px", objectFit: "cover" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">
                    ₦{(item.price * 700).toLocaleString()}
                  </p>
                  <a
                    onClick={() => {
                      addToCart(item);
                    }}
                    class="btn btn-primary w-100 btn btn-warning"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
