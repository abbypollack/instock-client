import './InventoryTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
// import {useState, useEffect} from 'react';

function InventoryTable({inventories, warehouses}) {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     // Simulating fetching data from the JSON file
    //     const itemsWithDetails = inventories.map((item) => ({
    //     ...item,
    //     detailsDisplayed: false,
    //     }));
    //     setItems(itemsWithDetails);
    // }, []);

    // const handleActionsClick = (itemId) => {
    //     // Handle actions (e.g., delete or edit) here
    //     console.log(`Actions clicked for item with ID: ${itemId}`);
    // };

    return (
    
<div className="table">
        <table className="table__inventory">
            <thead>
                <tr>
                    <th>Inventory Item <img src={sort} alt="sort" /></th>
                    <th>Category <img src={sort} alt="sort" /></th>
                    <th>Status<img src={sort} alt="sort" /></th>
                    <th>Quantity<img src={sort} alt="sort" /></th>
                    <th>Warehouse<img src={sort} alt="sort" /></th>
                    <th>Actions<img src={sort} alt="sort" /></th>
                </tr>
            </thead>
            <tbody>
            {inventories.map((inventory) => (
                        <tr key={inventory.id}>
                            <td><p>Inventory Item:</p>{inventory.item_name}<img src={chevron} alt="chevron"/></td>
                            <td><p>Category:</p>{inventory.category}</td>
                            <td><p>Status:</p>{inventory.status}</td>
                            <td><p>Quantity:</p>{inventory.quantity}</td>
                            <td><p>Warehouse:</p>{warehouses.find((warehouse) => warehouse.id === inventory.warehouse_id)?.warehouse_name || inventory.warehouse_name}</td>
                            <td className="visibility-hidden"><p>Actions</p></td>
                            <td><img src={deleted} alt="deleted" /></td>
                            <td><img src={edit} alt="edit" /></td>
                            <td className="display-none__mobile">
                                <img src={deleted} alt="deleted" />
                                <img src={edit} alt="edit" />
                            </td>
                        </tr>
                    ))}
                
            </tbody>
        </table>
    </div>
    )
}

export default InventoryTable;