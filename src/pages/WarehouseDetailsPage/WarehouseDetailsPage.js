import './WarehouseDetailsPage.scss';
import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-white-24px.svg';
import WarehouseDetailstable from '../../components/WarehouseDetailsTable/WarehouseDetailsTable';
// import deleted from '../../assets/icons/delete_outline-24px.svg'
// import edit from '../../assets/icons/edit-24px.svg'
// import sort from '../../assets/icons/sort-24px.svg'
// import chevron from '../../assets/icons/chevron_right-24px.svg'
// import InventoryTable from '../../components/InventoryTable/InventoryTable';
// import InventoryTable from '../../components/InventoryTable/InventoryTable';


function WarehouseDetailsPage({warehouse}){
    const [warehouseDetails, setWarehouseDetails] = useState();
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        const fetchWarehouseDetails = async () => {
            try {
                console.log(warehouseId)
                const response = await axios.get(`http://localhost:8081/api/warehouses/${warehouseId}`);
                // console.log(response.data)
                setWarehouseDetails(response.data);
            } catch (error) {
                console.error('this is the error: ',error);
            }
        };

        fetchWarehouseDetails();
    }, [warehouseId]);

    const handleEdit = () => {
        navigate(`/warehouses/${warehouseId}`);
    }

    function handleCancel() {
        navigate(-1);
    }
    return(
        <>
        <section className="warehouse-inventory">
            <div className="warehouse-inventory__title-container">
            {/* <Link to="/warehouses"> */}
                <img className="warehouse-inventory__title-icon" src={arrowBackIcon} alt="arrow back" />
            {/* </Link> */}
                <h1 className="warehouse-inventory__title">{warehouseDetails?.warehouse_name}</h1>
                <button className="button__button button__edit"><img src={editIcon} onClick={handleEdit} alt="edit"/></button>
            </div>
            <section className="warehouse-inventory__subheader">
                <section className='warehouse-inventory__box-1'>
                <div className="warehouse-inventory__subheader--address">
                    <h3 className='warehouse-inventory__sub-title'>Warehouse Address:</h3>
                    <p className='warehouse-inventory__'>{warehouseDetails?.address}</p>
                    <p className='warehouse-inventory__'>{warehouseDetails?.city}, {warehouseDetails?.state} {warehouseDetails?.country}</p>
                </div>
                </section>
                <section className='warehouse-inventory__box-2'>
                    <div className="warehouse-inventory__subheader--contact">
                    <div className="warehouse-inventory__subheader--contact-name">
                        <h3 className='warehouse-inventory__sub-title'>Contact Name:</h3>
                        <p className='warehouse-inventory__'>{warehouseDetails?.contact_name}</p>
                        <p className='warehouse-inventory__'>{warehouseDetails?.contact_position}</p>
                    </div>
                    <div className="warehouse-inventory__subheader--contact-info">
                        <h3 className='warehouse-inventory__sub-title'>Contact Information:</h3>
                        <p className='warehouse-inventory__'>{warehouseDetails?.contact_phone}</p>
                        <p className='warehouse-inventory__'>{warehouseDetails?.contact_email}</p>
                    </div>
                    </div>
                    
                </section>
            </section>
            <div>
                <WarehouseDetailstable/>
            </div>
        </section>
        </>
    )
}

export default WarehouseDetailsPage;