import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/items").then((res) => {
      setItems(res.data)
    })
    axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/cart").then((res) => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post("https://65e4b3b13070132b3b2528ae.mockapi.io/cart", obj).then   // same for Favorite
      (res => setCartItems(prev => [...prev, res.data]))
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post("https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite", obj)
    setFavorites(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  return <div className="wrapper clear">
    {cartOpened && <Drawer items={cartItems}
      onClose={() => setCartOpened(false)}
      onRemove={onRemoveItem} />}

    <Header onClickCart={() => setCartOpened(true)} />



    <Routes>
      <Route path="/" element={<Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
      />} />
    </Routes>


  </div>
}


