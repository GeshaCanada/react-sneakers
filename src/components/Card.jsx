export default function Card() {
  return (
    <>
      <div className="card">
        <div className="favorite">
          <img src="/img/heart_unliked.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={112}
          src="/img/sneakers/1.jpg"
          alt="Sneakers"
        />
        <h5>Men's sneakers Nike Blaizer Mid Suede</h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>49.99$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img
          width={133}
          height={112}
          src="/img/sneakers/2.jpg"
          alt="Sneakers"
        />
        <h5>Men's sneakers Nike Air Max 270</h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>49.99$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img
          width={133}
          height={112}
          src="/img/sneakers/3.jpg"
          alt="Sneakers"
        />
        <h5>Men's sneakers Nike Blaizer Mid Suede</h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>39.99$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
          </button>
        </div>
      </div>

      <div className="card">
        <img
          width={133}
          height={112}
          src="/img/sneakers/4.jpg"
          alt="Sneakers"
        />
        <h5>Sneakers Puma Aka Boku Future Rider </h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>44.99$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
}
