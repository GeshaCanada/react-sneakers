import Card from "../components/Card/Card";

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
    
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search:"${searchValue}"` : "All sneakers"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn_remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              {...item}
              key={index}
              onFavorite={(obj) => {
                onAddToFavorite(obj);
              }}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
            />

            // title={obj.title}
            // price={obj.price} .. sprad the same
            // imageUrl={obj.imageUrl}
          ))}
      </div>
    </div>
  );
}
