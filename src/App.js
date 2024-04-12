import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

export default function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function fetchData() {
      try {

        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/cart"),
          axios.get("https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite"),
          axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/items")
        ])

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);

      } catch (error) {
        alert("Error fetching data ;(");
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => item.parentId === obj.id)
      if (findItem) {
        setCartItems(prev => prev.filter(item => item.parentId !== obj.id));
        await axios.delete(`https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, obj]);
        await axios.post("https://65e4b3b13070132b3b2528ae.mockapi.io/cart", obj);
      }
    } catch (error) {
      alert("Error adding item to cart");
      console.error("Error adding item to cart:", error);
    }
  };



  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Error removing item from cart");
      console.error("Error removing item from cart:", error);
    }
  };


  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        await axios.delete(`https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite/${obj.id}`);
      } else {
        const { data } = await axios.post("https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite", obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert("Error add to favorites");
      console.error("Error add to favorites:", error);
    }
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.parentId === id)
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>
      <div className="wrapper clear">
        <Drawer items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened} />

        <Header onClickCart={() => setCartOpened(true)} />



        <Routes>
          <Route path="/" element={<Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />} />

          <Route path="/favorites" element={<Favorites
          />} />

          <Route path="/orders" element={<Orders
          />} />
        </Routes>


      </div>
    </AppContext.Provider>
  )
}


