import './WarehouseTable.scss';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function WarehouseTable({warehouse}) {

    // add functionality after Jorge completes warehouse page
    return (
        <div className="table">
            <table className="table__container table__container--warehouse">
                <thead>
                    <tr>
                        <th>Warehouse<img src={sort} alt="sort" /></th>
                        <th>Address <img src={sort} alt="sort" /></th>
                        <th>Contact Name<img src={sort} alt="sort" /></th>
                        <th>Contact Information<img src={sort} alt="sort" /></th>
                        <th>Actions<img src={sort} alt="sort" /></th>
                    </tr>
                </thead>
                <tbody>
                    {warehouse.map((info) => (
                        <tr key={info.id}>
                            <td className="table__position1"><p>Warehouse:</p>{info.warehouse_name}<img src={chevron} alt="chevron"/></td>
                            <td className="table__position2"><p>Address:</p>{info.address} {info.city} {info.country}</td>
                            <td className="table__position3"><p>Contact Name:</p>{info.contact_name}</td>
                            <td className="table__position4"><p>Contact Information:</p>{info.contact_phone}{info.contact_email}</td>
                            <td className="table__position7"><img src={deleted} alt="deleted" /></td>
                            <td className="table__position8"><img src={edit} alt="edit" /></td>
                            <td className="table__position9 display-none__mobile">
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
export default WarehouseTable;