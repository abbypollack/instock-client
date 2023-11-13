import InventoryTable from '../../components/InventoryTable/InventoryTable';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';



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

        const navigate = useNavigate();
        const clickAddItem = () => {
            navigate(`/inventory/add`)
        }
    
        return (
            <section className="list-container">
                <div className="list-container__header">
                    <div className="list-container__heading">
                        <h1 className="list-container__heading-title">Inventory</h1>
                    </div>
    
                    <div className="list-container__button-bar">
                        <SearchBar />
                        <button className="list-container__button-bar--add"
                        onClick={() => clickAddItem()}>
                            Add New Item
                        </button>
                    </div>
                </div>
                <InventoryTable inventories={inventory} warehouses={warehouse}/>                
            </section>
        )
    }

export default InventoryPage;