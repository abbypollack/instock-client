import './WarehouseDetailsPage.scss';
import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-white-24px.svg';


function WarehouseDetailsPage({warehouse}){
    const [warehouseDetails, setwarehouseDetails] = useState(null);
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    const clickwarehouse = (warehouse) => {
        setSelectedwarehouse(warehouse);
    }
    
    useEffect(() => {
        const fetchwarehouseDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/warehouses/${warehouseId}`);
                setwarehouseDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchwarehouseDetails();
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
                <h1 className="warehouse-inventory__title">{warehouseDetails?.warehouse_name}Washington</h1>
                <button className="button__button button__edit"><img src={editIcon} onClick={handleCancel} alt="edit"/></button>
            </div>
            <section className="warehouse-inventory__subheader">
                <section className='warehouse-inventory__box-1'>
                <div className="warehouse-inventory__subheader--address">
                    <h3 className='warehouse-inventory__sub-title'>Warehouse Address:</h3>
                    <p className='warehouse-inventory__'>'JSX address'</p>
                    <p className='warehouse-inventory__'>'JSX city', 'state'</p>
                </div>
                </section>
                <section className='warehouse-inventory__box-2'>
                    <div className="warehouse-inventory__subheader--contact">
                    <div className="warehouse-inventory__subheader--contact-name">
                        <h3 className='warehouse-inventory__sub-title'>Contact Name:</h3>
                        <p className='warehouse-inventory__'>'JSX name'</p>
                        <p className='warehouse-inventory__'>' JSX position'</p>
                    </div>
                    <div className="warehouse-inventory__subheader--contact-info">
                        <h3 className='warehouse-inventory__sub-title'>Contact Information:</h3>
                        <p className='warehouse-inventory__'>'JSX phone'</p>
                        <p className='warehouse-inventory__'>'JSX email'</p>
                    </div>
                    </div>
                </section>
            </section>
        </section>
        </>
    )
}

export default WarehouseDetailsPage;