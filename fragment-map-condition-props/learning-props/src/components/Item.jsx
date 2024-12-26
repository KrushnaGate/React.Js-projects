import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        BUY
      </button>
    </li>
  );
};

export default Item;
