import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //  let foodItems = [];

  let [foodItems, setfoodItems] = useState(["Dal", "vegetebles", "Roti"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 id="heading"> Healthy Food </h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={onKeyDown}></FoodInput>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <button id="button">Cancle</button>
    </>
  );
}

export default App;
