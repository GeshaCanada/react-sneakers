import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export default function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {

 
      const cartResponse = await axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/cart")
      const favoritesResponse = await axios.get("https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite")
      const itemsResponse = await axios.get("https://65e4b3b13070132b3b2528ae.mockapi.io/items")

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
      
      console.log("Cart items:", cartResponse.data);
    console.log("Items:", itemsResponse.data);

    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
  
      if (cartItems.find(item => (item.id) ===(obj.id))) {
      axios.delete(`https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => (item.id) !== (obj.id)))
      } else {
        axios.post("https://65e4b3b13070132b3b2528ae.mockapi.io/cart", obj);
        setCartItems(prev => [...prev, obj]);
      }
    
  }


  const onRemoveItem = (id) => {
    axios.delete(`https://65e4b3b13070132b3b2528ae.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        await axios.delete(`https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite/${obj.id}`);
      } else {
        const { data } = await axios.post("https://65ea6f38c9bf92ae3d3b8616.mockapi.io/favorite", obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert("Can't added to favorites");
    }
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
        cartItems={cartItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        isLoading={isLoading}
      />} />

      <Route path="/favorites" element={<Favorites
        items={favorites}
        onAddToFavorite={onAddToFavorite} />} />
    </Routes>


  </div>
}


