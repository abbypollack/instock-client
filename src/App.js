import './App.scss';
import Header from './components/Header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
