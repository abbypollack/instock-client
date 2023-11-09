import './InventoryTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function InventoryTable() {
    return (
        <div className="table">
            <table className="table__inventory">
                <thead>
                    <tr>
                        <th>Inventory Item <img src={sort} alt="arrow2" /></th>
                        <th>Category <img src={sort} alt="arrow2" /></th>
                        <th>Status<img src={sort} alt="arrow2" /></th>
                        <th>Quantity<img src={sort} alt="arrow2" /></th>
                        <th>Warehouse<img src={sort} alt="arrow2" /></th>
                        <th>Actions<img src={sort} alt="arrow2" /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* map function to cycle thru future JSX items */}
                        <td>'item'<img src={chevron} alt="chevron" /></td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td><img src={deleted} alt="arrow2" />
                            <img src={edit} alt="arrow" /></td>
                    </tr>
                    <tr>
                        {/* to be deleted after map function is implemented */}
                        <td>'item'<img src={chevron} alt="chevron" /></td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td><img src={deleted} alt="arrow2" />
                            <img src={edit} alt="arrow" /></td>
                    </tr>
                    <tr>
                        {/* to be deleted after map function is implemented */}
                        <td>'item'<img src={chevron} alt="chevron" /></td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td><img src={deleted} alt="arrow2" />
                            <img src={edit} alt="arrow" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default InventoryTable;