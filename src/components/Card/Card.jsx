import { useState } from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite} onClick={props.onFavorite}>
          <img src="/img/heart_unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{props.price}$</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn_checked.svg" : "/img/btn_plus.svg"}
            alt="Plus"
          />
        </div>
      </div>

      {/* <div className="card">  
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
        <h5>  </h5>
        <div className="d-flex justify-between ">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>44.99$</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus1.png" alt="Plus" />
          </button>
        </div>
      </div> */}
    </>
  );
}
