export default function Header() {
  return (
    <header className="d-flex justify-between align-center p-40 ">
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

      <ul className="d-flex">
        <li className="mr-30">
          <img
            width={18}
            height={18}
            src="/img/shop_cart.svg"
            alt="Shop's cart"
          />
          <span>120.00$</span>
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
