import React from "react";
import Hangman from "./Hangman";
import "./App.css";

const AnimalPicture = new URL("../src/images/bg-animal.jpg",import.meta.url)

function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}

export default App;
