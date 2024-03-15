import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import cart from "./images/cart icon.png";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Navbar = ({ cartLength }) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allCart, setAllCart] = useState([]);

  const [cartLengthPro, setCartLengthPro] = useState(cartLength);
  const [total, setTotal] = useState(0);
  const getTotal = () => {
    const subtotal = allCart.reduce((acc, item) => (acc += item.price), 0);
    setTotal(subtotal * 700);
  };

  useEffect(() => {
    getTotal();
  });

  useEffect(() => {
    setCartLengthPro(cartLength);
  }, [cartLength]);

  const getAllItems = () => {
    const allItems = localStorage.getItem("cart");
    const parsedItem = JSON.parse(allItems);
    console.log(allItems);
    if (parsedItem) {
      setAllCart(parsedItem);
    }
  };

  useEffect(() => {
    getAllItems();
  }, [cartLength]);
  const removeFromCart = (name) => {
    const allItems = localStorage.getItem("cart");
    const parsed = JSON.parse(allItems);
    const filteredData = parsed.filter((item) => {
      return item.name !== name;
    });
    console.log(filteredData);
  };
  return (
    <div className="mynav">
      <div
        className="d-flex justify-content-between align-items-center px-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.036)" }}
      >
        <div
          className="fs-4"
          onClick={() => {
            navigate("/");
          }}
        >
          LOGO
        </div>
        <div className="d-none d-md-flex align-items-center pt-2">
          <p
            className="fs-6"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </p>
          <p
            className="fs-6 ms-3"
            onClick={() => {
              navigate("/category/phone");
            }}
          >
            {" "}
            PHONES
          </p>
          <p
            className="fs-6 ms-3"
            onClick={() => {
              navigate("/category/fashion");
            }}
          >
            FASHION
          </p>
          <p
            className="fs-6 ms-3"
            onClick={() => {
              navigate("/category/skincare");
            }}
          >
            SKINCARE
          </p>
          <img
            onClick={handleShow}
            src={cart}
            style={{ width: "20px", marginTop: "-15px", marginLeft: "20px" }}
            alt=""
          />
          <span>{cartLengthPro}</span>
        </div>
        <div className="d-flex d-md-none">
          <img
            onClick={handleShow}
            src={cart}
            style={{ width: "20px", marginTop: "-2px", marginLeft: "20px" }}
            alt=""
          />
          <span className="me-4">{cartLengthPro}</span>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <div
          className="d-md-none puff-in-center bg-warning"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.036)" }}
        >
          <div className="d-flex flex-column vw -100 py-3 gap-1 px-4 pt-2">
            <p
              className="fs-6 ms-4"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </p>
            <p
              className="fs-6 ms-4"
              onClick={() => {
                navigate("/category/phone");
              }}
            >
              PHONES
            </p>
            <p
              className="fs-6 ms-4"
              onClick={() => {
                navigate("/category/fashion");
              }}
            >
              FASHION
            </p>
            <p
              className="fs-6 ms-4"
              onClick={() => {
                navigate("/category/skincare");
              }}
            >
              SKINCARE
            </p>
          </div>
        </div>
      )}{" "}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {allCart.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>
              {allCart?.map((item) => {
                return (
                  <div className="d-flex mb-5">
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        height: "100px",
                        width: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-4">
                      <div className="mb-2 font-bold fs-5">{item.name}</div>
                      <div className="mb-2">
                        {" "}
                        ₦{(item.price * 700).toLocaleString()}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="fs-3">
                SubTotal +/- <br />₦{total.toLocaleString()}
              </div>
              <div className="mt-5">
                <button
                  onClick={() => {
                    if (allCart.length > 0) {
                      localStorage.removeItem("cart");
                      setAllCart([]);
                      setCartLengthPro(0);
                    }
                  }}
                  className="btn btn-warning"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
