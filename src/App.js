import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const cards = [
  { title: "Men's sneakers Nike Blaizer Mid Suede", price: 49.99, imageUrl: "/img/sneakers/1.jpg" },
  { title: "Men's sneakers Nike Air Max 270", price: 49.99, imageUrl: "/img/sneakers/2.jpg" },
  { title: "Men's sneakers Nike Blaizer Mid Suede", price: 39.99, imageUrl: "/img/sneakers/3.jpg" },
  { title: "Sneakers Puma Aka Boku Future Rider ", price: 44.99, imageUrl: "/img/sneakers/4.jpg" },
]

export default function App() {
  return <div className="wrapper clear">
    <Drawer />

    <Header />

    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex">

        {cards.map((card, index) => (
          <Card
            key={index}
            {...card} />
          // title={obj.title}
          // price={obj.price} .. sprad the same
          // imageUrl={obj.imageUrl}

        ))
        }


      </div>

    </div>
  </div>
}


