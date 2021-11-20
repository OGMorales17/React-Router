import { BrowserRouter } from "react-router-dom";

import Navigation from "./Components/Navigation"
import DogRoutes from "./Components/DogRoutes"
import whiskey from "./dog-pictures/whiskey.jpg";
import duke from "./dog-pictures/duke.jpg";
import perry from "./dog-pictures/perry.jpg";
import tubby from "./dog-pictures/tubby.jpg";
import './App.css';

/**
I had install "npm i react-router-dom"
 */

function App({ dogs }) {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation dogs={dogs} />
          <div className="container">
            <DogRoutes dogs={dogs} />
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
