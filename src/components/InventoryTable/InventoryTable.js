import './InventoryTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function InventoryTable({inventories, warehouses}) {
    console.log(warehouses)
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
                                <td>{inventory.item_name}<img src={chevron} alt="chevron"/></td>
                                <td>{inventory.category}</td>
                                <td>{inventory.status}</td>
                                <td>{inventory.quantity}</td>
                                <td>{warehouses.find((warehouse) => warehouse.id === inventory.warehouse_id)?.warehouse_name || inventory.warehouse_name}</td>
                                <td>
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