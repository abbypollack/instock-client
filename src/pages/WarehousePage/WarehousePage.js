import WarehouseTable from '../../components/WarehouseTable/WarehouseTable';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import SearchBar from '../../components/SearchBar/SearchBar';
import './WarehousePage.scss';

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
        <section className='warehouse-list'>
            <div className='container'>
                <div className='container__h1'>
                    <h1 className='container__h1-title'>Warehouse</h1>
                </div>

                <div className='container__bttbar'>
                    <SearchBar />
                    <button className='container__bttbar-add-warehouse'>Add New Warehouse</button>
                </div>
            </div>
            <WarehouseTable warehouse={warehouse} />
        </section>
    )
}
export default WarehousePage;