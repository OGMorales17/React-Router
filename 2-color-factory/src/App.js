import { BrowserRouter } from "react-router-dom";
import ColorsRoutes from './Components/ColorsRoutes';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorsRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
