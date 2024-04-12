import { useState } from "react";
import Card from "../components/Card/Card";
import { useEffect } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://65ea6f38c9bf92ae3d3b8616.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat()); // or (data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Error of order request");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}
