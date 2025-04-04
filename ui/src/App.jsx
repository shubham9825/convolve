import "./App.css";
import MenuBar from "./presentation/Layout/MenuBar";
import Routing from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
