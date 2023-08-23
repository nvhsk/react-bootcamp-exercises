import React from "react";
import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍎 Apple", color: "red" },
    { id: 3, name: "🍑 Peach", color: "orange" },
    { id: 4, name: "🥝 Kiwi", color: "green" },
    { id: 5, name: "🫐 Blueberry", color: "blue" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        // <div className="card" key={id}>
        //   {name}
        // </div>
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
