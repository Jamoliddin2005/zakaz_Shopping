import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import Loading from "../../components/Loading/Loading";
import classes from "./Home.module.css";

function Home({ admin }) {
  const [products, setProducts] = useState([""]);

  const GETPRODUCTS = async () => {
    fetch(`${process.env.REACT_APP_URL}/category/`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((err) => console.log(""));
  };

  useEffect(() => {
    GETPRODUCTS();
  }, []);

  return (
    <div className={classes.Home}>
      <div className={"container"}>
        {products && products[0].products ? (
          products.map((item, index) => (
            <div key={index}>
              <div className={classes.category}>
                <h2>{item.name}</h2>
                {item.products && <span>Категория</span>}
              </div>
              {item.products ? (
                item.products.map((item, index) => (
                  <Products
                    admin={admin}
                    key={index}
                    image={item.image}
                    name={item.name}
                    many={item.many}
                    price={item.price}
                  />
                ))
              ) : (
                <div className="Loading_div">
                  <Loading />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="Loading_div">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
