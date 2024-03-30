import { useContext, useState } from "react";
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";

export default function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderCompleted, setIsOrederCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        // set Oreder
        "https://65ea6f38c9bf92ae3d3b8616.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrederCompleted(true);
      setCartItems([]); // clean cart in the state

      cartItems.forEach((item) => {
        axios.delete(
          `https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${item.id}`
        );
      });
    } catch (error) {
      alert("Can't order complete :(");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart{" "}
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn_remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex ">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn_remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>120.00$</b>
                </li>
                <li>
                  <span>Taxes 13%:</span>
                  <div></div>
                  <b>15.60$</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Place your order
                <img src="/img/arrow.svg" alt="Arrow" />{" "}
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Order completed" : "Cart is empty"}
            description={
              isOrderCompleted
                ? `The order #${orderId} will be shipped. Thank you!`
                : "Please add items for the order complete"
            }
            image={
              isOrderCompleted
                ? "/img/order_completed.svg"
                : "/img/empty_cart.svg"
            }
          />
        )}
      </div>
    </div>
  );
}
