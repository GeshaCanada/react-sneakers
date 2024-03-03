import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

export default function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {

    fetch("https://65e4b3b13070132b3b2528ae.mockapi.io/items").then((res) => {
      res.json().then(json => {
        setItems(json)
      })
    })

  }, [])

  const onAddToCart = (obj)=>{
   setCartItems(prev=>[...prev, obj])
  }


  return <div className="wrapper clear">
    {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

    <Header onClickCart={() => setCartOpened(true)} />

    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">

        {items.map((item, index) => (
          <Card
            {...item}
            key={index}
            onFavorite={() => console.log("Added to favorite")}
            onPlus={(obj) => {onAddToCart(obj)}}
          />

          // title={obj.title}
          // price={obj.price} .. sprad the same
          // imageUrl={obj.imageUrl}

        ))
        }


      </div>

    </div>
  </div>
}


