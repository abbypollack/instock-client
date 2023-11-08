import './App.scss';
// import AddInventoryItem from './pages/AddInventoryItem/AddInventoryItem';
// import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
// import EditInventoryItem from './pages/EditInventoryItem/EditInventoryItem';
// import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
// import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
// import WarehousePage from './pages/WarehousePage/WarehousePage';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path="" element={<WarehousePage />} /> */}
                <Route path="/details" element={<WarehouseDetailsPage />} />
                <Route path="/" element={<InventoryPage/>} />
                {/* <Route path="" element={<InventoryItemDetails />} /> */}
                {/* <Route path="" element={<EditWarehouse />} /> */}
                {/* <Route path="" element={<EditInventoryItem/>} /> */}
                {/* <Route path="" element={<AddNewWarehouse />} /> */}
                {/* <Route path="" element={<AddInventoryItem />} /> */}
                </Routes>
            <Footer />
        </BrowserRouter> 
    );
}

export default App;
