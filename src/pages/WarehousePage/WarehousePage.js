import WarehouseDetailsTable from '../../components/WarehouseDetailsTable/WarehouseDetailsTable';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';

function WarehousePage() {
    const [warehouse, setWarehouse] = useState([]);

        useEffect(() => {
                async function getWarehouse() {
                    const response = await axios.get(`${API_URL}/api/warehouses`);
                    setWarehouse(response.data);
                    console.log(response.data);
                } getWarehouse();
            }, []);

    return (
        <div>
            <h1>Warehouse</h1>
            <WarehouseDetailsTable warehouse={warehouse}/>
        </div>
    )
}
export default WarehousePage;