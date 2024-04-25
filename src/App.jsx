import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components.jsx/CoffeeCard";
import "./App.css";
import { useState } from "react";

function App() {
  const loaderCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffee);
  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-600 mb-4">
        Hot Cold Coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
