import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./scenes/Home";
import Checkout from "./scenes/Checkout";
import Navbar from "./components/Navbar";
import CartManu from "./components/CartMenu";
import Register from "./scenes/Register";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="checkout" element={<Checkout />}/>
                    <Route path="/register" element={<Register />} />
                </Routes>
                <CartManu />
            </BrowserRouter>
        </div>
    );
}

export default App;
