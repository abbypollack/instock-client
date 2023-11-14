import './WarehouseTable.scss';
import { useNavigate, NavLink } from 'react-router-dom';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import React, { useState } from 'react';
import deleted from '../../assets/icons/delete_outline-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
import '../GlobalTable/GlobalTable.scss';


function WarehouseTable({ warehouse }) {
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    const clickWarehouseDelete = (warehouse) => {
        setSelectedWarehouse(warehouse);
        setDeleteModal(true);
    }

    const navigate = useNavigate();

    const clickWarehouseEdit = (warehouseEdit) => {
        console.log(warehouseEdit)
        setSelectedWarehouse(warehouseEdit);
        navigate(`/warehouses/edit/${warehouseEdit.id}`)
    }

    return (
        <div className="table table__warehouse">
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
                            <td className="table__position1">
                                <NavLink to={`/warehouses/${info.id}`} className="blue-text"><p>Warehouse:</p>
                                    {info.warehouse_name}
                                    <img src={chevron} alt="chevron" />
                                </NavLink>
                            </td>
                            <td className="table__position2"><p>Address:</p>{info.address} {info.city} {info.country}</td>
                            <td className="table__position3"><p>Contact Name:</p>{info.contact_name}</td>
                            <td className="table__position4"><p>Contact Information:</p>{info.contact_phone} {info.contact_email}</td>
                            <td className="table__position7"><img src={deleted} alt="deleted"
                                //This line opens the delete component as a modal 
                                onClick={() => clickWarehouseDelete(info)} />
                            </td>
                            <td className="table__position8"><img src={edit} alt="edit"
                                onClick={() => clickWarehouseEdit(info)} /></td>
                            <td className="table__position9 display-none__mobile">
                                <img src={deleted} alt="deleted"
                                    onClick={() => clickWarehouseDelete(info)} />

                                <img src={edit} alt="edit"
                                    onClick={() => clickWarehouseEdit(info)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className='table__modal'>
                {deleteModal && <DeleteWarehouse openDelete={setDeleteModal} warehouse={selectedWarehouse} />}
            </section>
        </div>
    )
}
export default WarehouseTable;