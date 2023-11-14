import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
import DeleteInventory from '../../components/DeleteModalInv/DeletModalInv';
import '../GlobalTable/GlobalTable.scss';
import './WarehouseDetailsTable.scss';
import { API_URL } from '../../utils';
import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function WarehouseDetailsTable() {

    const [warehouseDetails, setWarehouseDetails] = useState([]);
    const { warehouseId } = useParams();

    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState(null);

    const clickInventoryDelete = (warehouseDetails) => {
        setSelectedInventory(warehouseDetails);
        setDeleteModal(true);
    }

    const navigate = useNavigate();
    const clickInventoryEdit = (inventoryEdit) => {
        setSelectedInventory(inventoryEdit);
        navigate(`/inventory/edit/${inventoryEdit}`)
    }

    useEffect(() => {
        const getWarehouseDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses/${warehouseId}/inventories`);
                setWarehouseDetails(response.data);
                console.log(response.data, 'api call in page')
            } catch (error) {
                console.error(error);
            }
        };
        getWarehouseDetails();
    }, [warehouseId]);


    return (
        <div className="table">
            <table className="table__container table__container--warehouse-details">
                <thead>
                    <tr>
                        <th>Inventory Item <img src={sort} alt="sort" /></th>
                        <th>Category <img src={sort} alt="sort" /></th>
                        <th>Status<img src={sort} alt="sort" /></th>
                        <th>Quantity<img src={sort} alt="sort" /></th>
                        <th>Actions<img src={sort} alt="sort" /></th>
                    </tr>
                </thead>
                <tbody>
                    {warehouseDetails.map((warehouse) => (
                        <tr key={warehouse.warehouse_id}>
                            <td className="table__position1 table__item--inventory"><p>Inventory Item</p>
                                <NavLink to={`/inventory/${warehouse.id}`} className="blue-text">
                                    {warehouse.item_name}<img src={chevron} alt="chevron" />
                                </NavLink>
                            </td>
                            <td className="table__position2 table__item--inventory"><p>Category</p>{warehouse.category}</td>
                            <td className="table__position3 table__item--inventory">
                                <p>Status</p>
                                <span className={`tag__${warehouse.status.toLowerCase() === 'out of stock' ? 'out-of-stock' : 'in-stock'}`}>
                                    {warehouse.status}
                                </span>
                            </td>
                            <td className="table__position4 table__item--inventory"><p>Qty</p>{warehouse.quantity}</td>
                            <td className="table__position7 table__item--inventory"><img src={deleted} alt="deleted" onClick={() => clickInventoryDelete(warehouse)}/></td>
                            <td className="table__position8 table__item--inventory"><img src={edit} alt="edit" onClick={() => clickInventoryEdit(warehouse.id)}/></td>
                            <td className="table__position9 table__item--inventory display-none__mobile">
                                <img src={deleted} alt="deleted" onClick={() => clickInventoryDelete(warehouse)} />
                                <img src={edit} alt="edit" onClick={() => clickInventoryEdit(warehouse.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className='table__modal'>
                {deleteModal && <DeleteInventory openDelete={setDeleteModal} inventory={selectedInventory} />}
            </section>
        </div>
    )
}

export default WarehouseDetailsTable;