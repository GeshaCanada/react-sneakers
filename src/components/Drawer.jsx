export default function Drawer({onClose,items =[]}) {
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

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flexS ">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn_remove.svg"
                alt="Remove  "
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
          <button className="greenButton">
            Place your order
            <img src="/img/arrow.svg" alt="Arrow" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
