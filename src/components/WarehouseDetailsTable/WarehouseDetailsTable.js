import './WarehouseDetailsTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function WarehouseDetailsTable({warehouse}) {

    // add functionality after Jorge completes warehouse page
    return (
        <div className="table">
            <table className="table__warehouse">
                <thead>
                    <tr>
                        <th>WAREHOUSE <img src={sort} alt="sort" /></th>
                        <th>ADDRESS <img src={sort} alt="sort" /></th>
                        <th>CONTACT NAME<img src={sort} alt="sort" /></th>
                        <th>CONTACT INFORMATION<img src={sort} alt="sort" /></th>
                        <th>ACTIONS<img src={sort} alt="sort" /></th>
                    </tr>
                </thead>
                <tbody>
                    {warehouse.map((info) => (
                        <tr key={info.id}>
                            <td>{info.warehouse_name}<img src={chevron} alt="chevron"/></td>
                            <td>{info.address}</td>
                            <td>{info.contact_name}</td>
                            <td>{info.contact_information}</td>
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
export default WarehouseDetailsTable;