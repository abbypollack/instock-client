import './InventoryTable.scss';
function InventoryTable() {
    return (
        <div className="table">
            <table className="table__inventory">
                <thead>
                    <tr>
                        <th>Invetory Item</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Warehouse</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* map function to cycle thru items */}
                        <td>'item_name &gt'</td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td>'Trash/EditButton'</td>
                    </tr>
                    <tr>
                        {/* to be deleted after map function is implemented */}
                        <td>'item_name &gt'</td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td>'Trash/EditButton'</td>
                    </tr>
                    <tr>
                        {/* to be deleted after map function is implemented */}
                        <td>'item_name &gt'</td>
                        <td>'category'</td>
                        <td>'status'</td>
                        <td>'quantity'</td>
                        <td>'warehouse_id'</td>
                        <td>'Trash/EditButton'</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default InventoryTable;