import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import "./AddNewWarehouse.scss"

function AddNewWarehouseComponent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ warehouseName: '', address: '', city: '', country: '', contactName: '', position: '', phone: '', email: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (x) => {
        const { name, value } = x.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };


    function handleCancel() {
        navigate(-1);
    }

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.warehouseName.trim()) {
            isValid = false;
            newErrors.warehouseName = 'A warehouse name is required.';
        }
        if (!formData.address.trim()) {
            isValid = false;
            newErrors.address = 'Address is required.';
        }
        if (!formData.city.trim()) {
            isValid = false;
            newErrors.city = 'A city is required.';
        }
        if (!formData.country.trim()) {
            isValid = false;
            newErrors.country = 'A country is required.';
        }
        if (!formData.contactName.trim()) {
            isValid = false;
            newErrors.contactName = 'A contact is needed';
        }
        if (!formData.position.trim()) {
            isValid = false;
            newErrors.position = "Please give us the contact's position";
        }
        if (!formData.phone.trim()) {
            isValid = false;
            newErrors.phone = 'An email is required.';
        }
        if (!formData.email.trim()) {
            isValid = false;
            newErrors.email = 'A phone nuber is required.';
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = async (x) => {
        x.preventDefault();

        if (!validateForm()) return;

        const payload = {
            warehouse_name: formData.warehouseName,
            address: formData.address,
            city: formData.city,
            country: formData.country,
            contact_name: formData.contactName,
            contact_position: formData.position,
            contact_phone: formData.phone,
            contact_email: formData.email,
        };

        try {
            const response = await axios.post('http://localhost:8081/api/warehouses', payload);
        } catch (error) {
            const errorMessage = error.response ? error.response.data.error : error.message;
            alert(`There was an error adding the new warehouse: ${errorMessage}`);
        }
    };

    return (
        <section className='add-warehouse-item'>
            <div className='add-warehouse-item__title-container'>
                <Link to="/warehouses">
                    <img className='add-warehouse-item__title-icon' src={arrowBackIcon} alt="arrow back icon" />
                </Link>
                <h1 className='add-warehouse-item__title'>Add New Warehouse</h1>
            </div>

            <form className='add-warehouse-item__form' onSubmit={handleSubmit} noValidate>
                <section className='add-warehouse-item__split'>
                    <div className='add-warehouse-item__split-line'>
                        <h2 className='add-warehouse-item__header'>Warehouse Details</h2>
                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Warehouse Name</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Warehouse Name'
                                id='warehouseName'
                                name='warehouseName'
                                value={formData.warehouseName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Address</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Street Address'
                                id='address'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>City</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='City'
                                id='city'
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Country</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Country'
                                id='country'
                                name='country'
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* =============== split forms in half =============== */}
                    <div>
                        <h2 className='add-warehouse-item__header'>Contact Details</h2>
                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Contact Name</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Contact Name'
                                id='contactName'
                                name='contactName'
                                value={formData.contactName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Position</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Position'
                                id='position'
                                name='position'
                                value={formData.position}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Phone Number</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Phone Number'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='add-warehouse-item__details'>
                            <label className='add-warehouse-item__subheader'>Email</label>
                            <input
                                className='add-warehouse-item__input'
                                type='text'
                                placeholder='Email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </section>
                <div className='add-warehouse-item__button'>
                    <button className='add-warehouse-item__button-cancel' type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className='add-warehouse-item__button-submit' type='submit' >
                        + Add Warehouse
                    </button>
                </div>
            </form>

        </section>
    )
}

export default AddNewWarehouseComponent;