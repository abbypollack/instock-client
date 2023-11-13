import WarehouseTable from '../../components/WarehouseTable/WarehouseTable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import SearchBar from '../../components/SearchBar/SearchBar';
import './WarehousePage.scss';
import "../../components/GlobalTable/GlobalTable.scss"

function WarehousePage() {
    const [warehouse, setWarehouse] = useState([]);

    useEffect(() => {
        async function getWarehouse() {
            const response = await axios.get(`${API_URL}/api/warehouses`);
            setWarehouse(response.data);
            console.log(response.data);
        } getWarehouse();
    }, []);

    const navigate = useNavigate();
    const clickWarehouseAdd = (warehouseAdd) => {
        navigate(`/warehouses/add`)
    }

    return (
        <section className="list-container">
            <div className="list-container__header">
                <div className="list-container__heading">
                    <h1 className="list-container__heading-title">Warehouse</h1>
                </div>

                <div className="list-container__button-bar">
                    <SearchBar />
                    <button className="list-container__button-bar--add"
                    onClick={() => clickWarehouseAdd()}>
                        Add New Warehouse
                    </button>
                </div>
            </div>
            <WarehouseTable warehouse={warehouse} />
        </section>
    )
}
export default WarehousePage;