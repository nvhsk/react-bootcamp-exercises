import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    // adds new animal to the list ⬇️
    setAnimals([...animals, { ...newAnimal, id: uid() }]);
    console.log(newAnimal); // nur das animal auslogen
    console.log({ ...newAnimal, id: uid() }); // das animal UND die ID auslogen
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
