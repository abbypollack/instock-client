import './App.scss';
// import AddInventoryItem from './pages/AddInventoryItem/AddInventoryItem';
// import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
// import EditInventoryItem from './pages/EditInventoryItem/EditInventoryItem';
// import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
// import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
// import WarehousePage from './pages/WarehousePage/WarehousePage';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.js';
import InventoryPage from "./pages/InventoryPage/InventoryPage.js";
import EditInventoryItemPage from "./pages/EditInventoryItem/EditInventoryItem";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path="" element={<WarehousePage />} /> */}
                <Route path="/warehouse/details" element={<WarehouseDetailsPage />} />
                {/* <Route path="" element={<WarehouseDetails />} /> */}
                <Route path="/inventory" element={<InventoryPage/>} />
                {/* <Route path="" element={<InventoryItemDetails />} /> */}
                {/* <Route path="" element={<EditWarehouse />} /> */}
                <Route path="/inventory/edit" element={<EditInventoryItemPage/>} />
                {/* <Route path="" element={<AddNewWarehouse />} /> */}
                <Route path="/inventory/add" element={<AddInventoryItemPage />} />
                </Routes>
            <Footer />
        </BrowserRouter> 
    );
}

export default App;
