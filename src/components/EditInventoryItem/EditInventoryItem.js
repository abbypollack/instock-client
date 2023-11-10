import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import './EditInventoryItem.scss';

function EditInventoryItemComponent({ itemId }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ itemName: '', description: '', category: '', status: 'in stock', quantity: 1, warehouse: '', });
    const [errors, setErrors] = useState({});
    const [warehouses, setWarehouses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/warehouses/');
                setWarehouses(response.data);
            } catch (error) {
                console.error('Error fetching warehouses:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/inventories/');
                const uniqueCategories = Array.from(new Set(response.data.map(item => item.category)));
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchWarehouses();
        fetchCategories();
    }, [itemId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
            ...(name === 'status' && value === 'out of stock' && { quantity: '' })
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };


    function handleCancel() {
        navigate(-1);
    }


    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.itemName.trim()) {
            isValid = false;
            newErrors.itemName = 'Item name is required.';
        }
        if (!formData.description.trim()) {
            isValid = false;
            newErrors.description = 'Description is required.';
        }
        if (!formData.category) {
            isValid = false;
            newErrors.category = 'Please select a category.';
        }
        if (!formData.warehouse_id) {
            isValid = false;
            newErrors.warehouse_id = 'Please select a warehouse.';
        }
        if (formData.status === 'in stock' && (!formData.quantity || formData.quantity <= 0)) {
            isValid = false;
            newErrors.quantity = 'Quantity must be greater than 0.';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const payload = {
            warehouse_id: formData.warehouse,
            item_name: formData.itemName,
            description: formData.description,
            category: formData.category,
            status: formData.status,
            quantity: formData.status === 'in stock' ? formData.quantity : 0
        };

        try {
            const response = await axios.put(`http://localhost:8081/api/inventories/${itemId}`, payload);
            localStorage.setItem('recentInventoryChange', JSON.stringify(response.data));
            navigate('/inventory');
        } catch (error) {
            const errorMessage = error.response ? error.response.data.error : error.message;
            alert(`There was an error updating the inventory item: ${errorMessage}`);
        }
    };

    function handleCancel() {
        navigate(-1);
    }

    return (
        <section className="edit-inventory-item">
            <div className="edit-inventory-item__title-container">
                <img className="edit-inventory-item__title-icon" onClick={handleCancel} src={arrowBackIcon} alt="arrow back icon" />
                <h1 className="edit-inventory-item__title">Edit Inventory Item</h1>
            </div>
            <form className="edit-inventory-item__form" onSubmit={handleSubmit} noValidate>
                <div className="edit-inventory-item__details">
                    <h2 className="edit-inventory-item__subheader">Item Details</h2>
                    <label className="edit-inventory-item__label" htmlFor="itemName">Item Name</label>
                    <input
                        className="edit-inventory-item__input"
                        type="text"
                        placeholder="Item Name"
                        id="itemName"
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleChange}
                    />
                    {errors.itemName && <p className="edit-inventory-item__error">{errors.itemName}</p>}

                    <label className="edit-inventory-item__label" htmlFor="description">Description</label>
                    <textarea
                        className="edit-inventory-item__textarea"
                        id="description"
                        placeholder="Please enter a brief item description."
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    {errors.description && <p className="edit-inventory-item__error">{errors.description}</p>}

                    <label className="edit-inventory-item__label" htmlFor="category">Category</label>
                    <select
                        className="edit-inventory-item__select"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Please select</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {errors.category && <p className="edit-inventory-item__error">{errors.category}</p>}
                </div>
                <div className="edit-inventory-item__availability">
                    <h2 className="edit-inventory-item__subheader">Item Availability</h2>
                    <div className="edit-inventory-item__stock">
                        <h4 className="edit-inventory-item__label">Status</h4>
                        <div className="edit-inventory-item__radios">
                            <label className="edit-inventory-item__label edit-inventory-item__label--radio">
                                <input
                                    className="edit-inventory-item__radio"
                                    type="radio"
                                    name="status"
                                    value="in stock"
                                    checked={formData.status === 'in stock'}
                                    onChange={handleChange}
                                />
                                <span className="edit-inventory-item__radio-text">In stock</span>
                            </label>
                            <label className="edit-inventory-item__label edit-inventory-item__label--radio edit-inventory-item__label--radio-out">
                                <input
                                    className="edit-inventory-item__radio"
                                    type="radio"
                                    name="status"
                                    value="out of stock"
                                    checked={formData.status === 'out of stock'}
                                    onChange={handleChange}
                                />
                                <span className="edit-inventory-item__radio-text">Out of stock</span>
                            </label>
                        </div>
                    </div>
                    {formData.status === 'in stock' && (
                        <>
                            <label className="edit-inventory-item__label" htmlFor="quantity">Quantity</label>
                            <input
                                className="edit-inventory-item__input edit-inventory-item__input--quantity"
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                min="1"
                            />
                            {errors.quantity && <p className="edit-inventory-item__error">{errors.quantity}</p>}
                        </>
                    )}
                    <label className="edit-inventory-item__label" htmlFor="warehouse">Warehouse</label>
                    <select
                        className="edit-inventory-item__select"
                        id="warehouse"
                        name="warehouse"
                        value={formData.warehouse}
                        onChange={handleChange}
                    >
                        <option value="">Please select</option>
                        {warehouses.map((warehouse) => (
                            <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                        ))}
                    </select>
                    {errors.warehouse_id && <p className="edit-inventory-item__error">{errors.warehouse_id}</p>}
                </div>
                <div className="edit-inventory-item__buttons">
                    <button className="edit-inventory-item__button edit-inventory-item__button--cancel" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="edit-inventory-item__button edit-inventory-item__button--submit" type="submit">Save</button>
                </div>
            </form>
        </section>
    );

}

export default EditInventoryItemComponent;