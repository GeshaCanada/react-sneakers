import { within } from "@testing-library/react";

export default function App() {
  return <div className="wrapper clear">

    <header className="d-flex justify-between align-center p-40 ">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo for sneakers shop" />

        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-6">The best shoes shop</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/shop_cart.svg" alt="Shop's cart" />
          <span>120$</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User's profile" />
        </li>

      </ul>

    </header>
    <div className="content p-40 ">
      <h1 className="mb-40">All sneakers</h1>

      <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
          <h5>Men's sneakers Nike Blaizer Mid Suede</h5>
          <div className="d-flex justify-between ">
            <div className="d-flex flex-column"  >
              <span>Price:</span>
              <b>49.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
          <h5>Men's sneakers Nike Air Max 270</h5>
          <div className="d-flex justify-between ">
            <div className="d-flex flex-column"  >
              <span>Price:</span>
              <b>49.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
          <h5>Men's sneakers Nike Blaizer Mid Suede</h5>
          <div className="d-flex justify-between ">
            <div className="d-flex flex-column"  >
              <span>Price:</span>
              <b>39.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Sneakers Puma Aka Boku Future Rider  </h5>
          <div className="d-flex justify-between ">
            <div className="d-flex flex-column"  >
              <span>Price:</span>
              <b>44.99$</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
}


