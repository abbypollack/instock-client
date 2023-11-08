import './App.scss';
import Header from './components/Header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
