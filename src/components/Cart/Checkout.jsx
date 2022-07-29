import React from "react";

import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" name="street" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="cap">Postal code</label>
        <input type="text" name="cap" id="cap" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
