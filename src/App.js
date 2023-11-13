import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import InventoryItemDetailsPage from './pages/InventoryItemDetails/InventoryItemDetails';
import AddInventoryItemPage from './pages/AddInventoryItem/AddInventoryItem';
import EditInventoryItemPage from "./pages/EditInventoryItem/EditInventoryItem";
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
import EditWarehousePage from './pages/EditWarehouse/EditWarehouse';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryPage from "./pages/InventoryPage/InventoryPage.js";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Warehouse routes */}
                <Route path="/" element={<WarehousePage />} />
                <Route path="/warehouses" element={<WarehousePage />} />
                <Route path="/warehouses/:warehouseId" element={<WarehouseDetailsPage />} />
                <Route path="/warehouses/edit/:warehouseId" element={<EditWarehousePage />} />
                <Route path="/warehouses/add" element={<AddNewWarehouse />} />
                {/* Inventory routes */}
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/inventory/:itemId" element={<InventoryItemDetailsPage />} />
                <Route path="/inventory/edit/:itemId" element={<EditInventoryItemPage />} />
                <Route path="/inventory/add" element={<AddInventoryItemPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
