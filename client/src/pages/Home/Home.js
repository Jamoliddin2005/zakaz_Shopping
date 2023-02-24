import React from "react";
import Products from "../../components/Products/Products";
import classes from "./Home.module.css";

function Home() {
  const products = [
    {
      image: "",
      name: "Windscribe 360 GB",
      many: 40,
      price: 15,
      category: "Безопасность, VPN",
    },
    {
      image: "",
      name: "SurfShark Premium",
      many: 12,
      price: 100,
      category: "Безопасность, VPN",
    },
    {
      image: "",
      name: "NordVPN 2024",
      many: 9,
      price: 35,
      category: "Безопасность, VPN",
    },
    {
      image: "",
      name: "TunnelBear 2025",
      many: 31,
      price: 30,
      category: "Безопасность, VPN",
    },
  ];



  return (
    <div className={classes.Home}>
      <div className={"container"}>
        <div className={classes.category}>
          <h2>Безопасность, VPN</h2>
          <span>Категория</span>
        </div>
        {products.map((item, index) => (
          <Products
            key={index}
            image={item.image}
            name={item.name}
            many={item.many}
            price={item.price}
          />
        ))}
        <div className={classes.category}>
          <h2>Аккаунты</h2>
          <span>Категория</span>
        </div>
        {products.map((item, index) => (
          <Products
            key={index}
            image={item.image}
            name={item.name}
            many={item.many}
            price={item.price}
          />
        ))}
        <div className={classes.category}>
          <h2>Другое</h2>
          <span>Категория</span>
        </div>
        {products.map((item, index) => (
          <Products
            key={index}
            image={item.image}
            name={item.name}
            many={item.many}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
