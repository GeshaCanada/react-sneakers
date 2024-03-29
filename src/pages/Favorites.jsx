import { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

export default function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />

          // title={obj.title}
          // price={obj.price} .. sprad the same
          // imageUrl={obj.imageUrl}
        ))}
      </div>
    </div>
  );
}
