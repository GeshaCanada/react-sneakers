import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

export default function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40 ">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Logo for sneakers shop"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-6">The best shoes shop</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="/img/shop_cart.svg"
            alt="Shop's cart"
          />
          <span>{totalPrice}$</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/favorite_heart.svg"
              alt="Bookmarks"
            />
          </Link>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/img/user.svg"
            alt="User's profile"
          />
        </li>
      </ul>
    </header>
  );
}
