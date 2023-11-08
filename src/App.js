import './App.scss';
// import Header from './components/Header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import InventoryList from './components/InventoryList/InventoryList.js';


function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
            </Routes>
            <InventoryList />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
