import FoodItems from "./components/FoodItems";
import ErrorMSG from "./components/ErrorMSG";
import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Apple", "Banana", "Orange", "Milk", "Daal", "Eggs"];

  return (
    <>
      <Container>
        {/* You can use Fragment shorthand instead of React.Fragment */}
        <h1>Healthy Food</h1>
        <FoodItems items={foodItems} />

        <ErrorMSG items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
