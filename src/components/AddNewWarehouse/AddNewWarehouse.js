import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';

function AddNewWarehouseComponent() {
    const [addWarehouse, setAddWarehouse] = useState(null);
    useEffect(() => {
        async function addingWarehouse(){
            const response = await axios.post('http://localhost:8080/api/warehouses', addWarehouse)
        }
        if (addWarehouse){
            addWarehouse();
        }
    }, [addWarehouse]);

    const handleSubmit = (x) => {
        x.preventDefault();

        const warehouseSubmit = {
            warehouse_name : x.target.warehousename.value,
            address : x.target.address.value,
            city : x.target.city.value,
            country : x.target.country.value,
            contactname : x.target.contactname.value,
            contact_position : x.target.position.value,
            contact_phone : x.target.phone.value,
            contact_email : x.target.email.value
        }

        setAddWarehouse(warehouseSubmit);
        x.target.reset();
    }

    return (
        <section className='add-warehouse-item'>
            <div className='add-warehouse-item__title-container'>
                <Link to="/warehouses">
                    <img className='add-warehouse-item__title-icon' src={arrowBackIcon} alt="arrow back icon" />
                </Link>
                <h1 className='add-warehouse-item__title'>Add New Warehouse</h1>
            </div>

            <section className='add-warehouse-item__flex'>
                <form className='add-warehouse-item__form' onSubmit={handleSubmit}>
                    <div className='add-warehouse-item__details'>
                        <h2 className='add-warehouse-item__header'>Warehouse Details</h2>
                        <h3 className='add-warehouse-item__subheader'>Warehouse Name</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='warehouse name'
                            id='warehousename'
                            name='warehousename'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>Address</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='address'
                            id='address'
                            name='address'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>City</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='city'
                            id='city'
                            name='city'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>Country</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='country'
                            id='country'
                            name='country'
                        />
                    </div>
{/* ========================= split forms in half ========================= */}
                    <div className='add-warehouse-item__details'>
                    <h2 className='add-warehouse-item__header'>Contact Details</h2>
                        <h3 className='add-warehouse-item__subheader'>Contact Name</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='contact name'
                            id='contactname'
                            name='contactname'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>Position</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='position'
                            id='position'
                            name='position'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>Phone Number</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='phone'
                            id='phone'
                            name='phone'
                        />
                    </div>

                    <div className='add-warehouse-item__details'>
                        <h3 className='add-warehouse-item__subheader'>Email</h3>
                        <input
                            className='add-warehouse-item__input'
                            type='text'
                            placeholder='email'
                            id='email'
                            name='email'
                        />
                    </div>
                </form>
            <div>
                <button className='add-warehouse-item__button'>
                    Cancel
                </button>
                <button className='add-warehouse-item__button'>
                    + Add Warehouse
                </button>
            </div>
            </section>

        </section>
    )
}

export default AddNewWarehouseComponent;