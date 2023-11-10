import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.js';
import InventoryItemDetailsPage from './pages/InventoryItemDetails/InventoryItemDetails';
import AddInventoryItemPage from './pages/AddInventoryItem/AddInventoryItem';
import EditInventoryItemPage from "./pages/EditInventoryItem/EditInventoryItem";
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
// import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
// import EditInventoryItem from './pages/EditInventoryItem/EditInventoryItem';
// import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
// import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryPage from "./pages/InventoryPage/InventoryPage.js";
import Header from './components/Header/Header.js';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path="" element={<WarehousePage />} /> */}
                <Route path="/warehouse/details" element={<WarehouseDetailsPage />} />
                {/* <Route path="" element={<WarehouseDetails />} /> */}
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/inventory/:id" element={<InventoryItemDetailsPage />} />
                {/* <Route path="" element={<EditWarehouse />} /> */}
                <Route path="/inventory/edit" element={<EditInventoryItemPage />} />
                {/* <Route path="" element={<AddNewWarehouse />} /> */}
                <Route path="/inventory/add" element={<AddInventoryItemPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
