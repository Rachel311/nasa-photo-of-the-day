import React from "react";
import "./App.css";
import MainComponent from '../src/Components/MainComponent'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <MainComponent/>
      </p>
    </div>
  );
}

export default App;
