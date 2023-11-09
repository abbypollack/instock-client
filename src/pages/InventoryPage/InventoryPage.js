import InventoryTable from '../../components/InventoryTable/InventoryTable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils';

function InventoryPage() {
    const [inventory, setInventory] = useState([]);
    const [warehouse, setWarehouse] = useState([]);

        useEffect(() => {
                async function getInventory() {
                    const response = await axios.get(`${API_URL}/api/inventories`);
                    setInventory(response.data);
                } getInventory();
            }, []);
        useEffect(() => {
            async function getWarehouses() {
                const response = await axios.get(`${API_URL}/api/warehouses`);
                setWarehouse(response.data);
            } getWarehouses();
        }, []);

    return (
        <div>
            <h1>Inventory</h1>
            {/* <SearchBar />
            <AddButton text={Item}/> */}
            <InventoryTable inventories={inventory} warehouses={warehouse}/>
        </div>
    )
}
export default InventoryPage;