import React from "react";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";

function Products({ image, name, many, price }) {
  return (
    <div className={classes.Products}>
      <div className={classes.left}>
        {image ? (
          <img src={image} alt="" />
        ) : (
          <div className={classes.circle}></div>
        )}
        <h3>{name}</h3>
      </div>
      <div className={classes.center}>
        <span>{many} шт</span>
        <span>{price} за шт</span>
      </div>
      <div className={classes.right}>
        <Link to={"/pay-thanks"} onClick={(e) => {
          window.localStorage.setItem('pay_name', name)
        }}>
          <button >
            <img src="/img/CartIcon.png" alt="" />
            <span>Купить</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
