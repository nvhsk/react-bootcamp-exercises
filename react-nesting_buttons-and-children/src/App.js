import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Hey </Button>
      <Button> Hello </Button>
      <Button> Hi </Button>
      <Button> Hej </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
