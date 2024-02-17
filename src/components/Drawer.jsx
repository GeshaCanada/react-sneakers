export default function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h3 className="d-flex justify-between mb-30">
          Shopping cart
          <img className="cu-p" src="/img/btn_remove.svg" alt="Remove  " />
        </h3>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Men's sneakers Nike Blaizer Mid Suede</p>
              <b>49.99$</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn_remove.svg"
              alt="Remove  "
            />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Men's sneakers Nike Air Max 270</p>
              <b>49.99$</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn_remove.svg"
              alt="Remove  "
            />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Men's sneakers Nike Blaizer Mid Suede</p>
              <b>39.99$</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn_remove.svg"
              alt="Remove  "
            />
          </div>
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
          <button className="greenButton">
            Place your order
            <img src="/img/arrow.svg" alt="Arrow" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
