import './InventoryTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function InventoryTable({inventory}) {
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
                        {inventory.map((item) => (
                            <tr key={item.id}>
                                <td>{item.item_name}<img src={chevron} alt="chevron"/></td>
                                <td>{item.category}</td>
                                <td>{item.status}</td>
                                <td>{item.quantity}</td>
                                <td>{item.warehouse_id}</td>
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