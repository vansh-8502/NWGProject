import './App.css';
import Header from "./Header"
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}>
             {/* <Login/> */}
          </Route>
          <Route path="/checkout" element={<Checkout/>}> 
            {/* <Header/>
            <Checkout/> */}
          </Route>

          <Route path="/" element={<Home/>}>
            {/* <Header/>
            <Home/> */}
          </Route>
        </Routes>

      </Router>
      
      
    </div>
  );
}

export default App;


//