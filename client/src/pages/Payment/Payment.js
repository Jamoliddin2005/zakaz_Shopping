import React from "react";
import classes from "./Payment.module.css";

function Payment() {
  return (
    <div className={classes.Payment}>
      <div className="container">
        <h1>Спасибо за покупку</h1>
        <div className={classes.row}>
          <div className={classes.cart}>
            <img
              src="/img/cart1.png"
              alt=""
              onMouseDown={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className={classes.input}>
              {window.localStorage.getItem
                ? window.localStorage.getItem("pay_name")
                : "Windscribe 360 GB"}
            </div>
          </div>
          <img
            src="/img/cart2.png"
            alt=""
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
          <img
            src="/img/cart3.png"
            alt=""
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
          <img
            src="/img/cart4.png"
            alt=""
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
