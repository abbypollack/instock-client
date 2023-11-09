import InventoryTable from '../../components/InventoryTable/InventoryTable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils';

function InventoryPage() {
    const [inventory, setInventory] = useState([]);

        useEffect(() => {
                async function getInventory() {
                    const response = await axios.get(`${API_URL}/api/inventories`);
                    setInventory(response.data);
                    console.log(response.data);
                } getInventory();
            }, []);

    return (
        <div>
            <h1>Inventory</h1>
            {/* <SearchBar />
            <AddButton text={Item}/> */}
            <InventoryTable inventory={inventory}/>
        </div>
    )
}
export default InventoryPage;