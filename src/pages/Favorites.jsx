import Card from "../components/Card/Card";

export default function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
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
