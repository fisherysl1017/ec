import React, { useEffect, useState } from "react";
import img1 from "./images/carousel img-fashion.png";
import img2 from "./images/carousel img-fashion2.png";
import img3 from "./images/carousel img-phone.png";
import img4 from "./images/carousel img-skincare.png";
import img5 from "./images/carousel img-phone2.png";
import products from "./products.json";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";

export const Home = () => {
  const navigate = useNavigate();
  const addToCart = (item) => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {
      const previousItems = JSON.parse(cart);
      localStorage.setItem("cart", JSON.stringify([...previousItems, item]));
    }
    getCartLength();
  };
  const [cartLength, setCartLength] = useState(0);
  const getCartLength = () => {
    const cart2 = localStorage.getItem("cart");
    const parsedItem = JSON.parse(cart2);
    setCartLength(parsedItem?.length || 0);
  };
  useEffect(() => {
    getCartLength();
  }, []);
  return (
    <div>
      <Navbar cartLength={cartLength}></Navbar>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to my E-commerce</h5>
              <p>We don't play with your products.</p>
            </div>
          </div>
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Pay us on time</h5>
              <p>We don't play with our money</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>We are here for you</h5>
              <p>We deal with integrity here</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img5} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="my-5">
        <h2 className="text-center">RECENTLY ADDED PRODUCTS</h2>
        <div className="d-flex justify-content-center">
          <div
            className="bg-warning"
            style={{ height: "3px", width: "70px" }}
          ></div>
        </div>
      </div>
      <div className="mt-5 row row-gap-3">
        {products.slice(0, 5).map((item) => {
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
                  <h5
                    class="card-title"
                    onClick={() => {
                      navigate(`/eachproduct/${item.name}`);
                    }}
                  >
                    {item.name}
                  </h5>
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
