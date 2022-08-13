import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Create from "./components/CreateComponents";
import Inventory from "./components/Inventory";
import Shop from "./components/ShopComponent";
import Update from "./components/UpdateComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Inventory/> }></Route>
          <Route path='/detail' element={<Shop/> }></Route>
          <Route path='/update' element={<Update/> }></Route>
          <Route path='/create' element={<Create/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
