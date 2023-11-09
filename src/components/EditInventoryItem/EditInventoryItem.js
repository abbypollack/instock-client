import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditInventoryItem.scss';

function EditInventoryItemComponent({ itemId }) {
    const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        category: '',
        status: 'in stock',
        quantity: 0,
        warehouse: '',
    });
    const [errors, setErrors] = useState({});
    const [warehouses, setWarehouses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // TODO: Fetch the item data from the API & populate the form
        // TODO: Fetch the list of warehouses from the API
        // setWarehouses(response.data);

        // TODO: Fetch the list of categories from the API
        // setCategories(response.data);

    }, [itemId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        if (name === 'status' && value === 'out of stock') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                quantity: '',
            }));
        }

        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    function handleCancel() {
        window.history.back();
    }


    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.itemName.trim()) {
            isValid = false;
            newErrors.itemName = 'Item name is required.';
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

        try {
            const response = await axios.put(`/api/inventory/${itemId}`, formData);
            console.log(response.data);
            // TODO: Handle the success scenario (redirect to the inventory list / success message)
        } catch (error) {
            console.error("There was an error updating the inventory item:", error.response || error);
            // TODO: Handle the error scenario
        }
    };

    return (
        <section className="edit-inventory-item">
            <form className="edit-inventory-item__form" onSubmit={handleSubmit} noValidate>
                <div className="edit-inventory-item__details">
                    <h2 className="edit-inventory-item__title">Item Details</h2>
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
                    <h2 className="edit-inventory-item__title">Item Availability</h2>
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
                    {errors.warehouse && <p className="edit-inventory-item__error">{errors.warehouse}</p>}
                </div>
            </form>
            <div className="edit-inventory-item__buttons">
                <button className="edit-inventory-item__button edit-inventory-item__button--cancel" type="button" onClick={handleCancel}>Cancel</button>
                <button className="edit-inventory-item__button edit-inventory-item__button--submit" type="submit">Save</button>
            </div>
        </section>
    );

}

export default EditInventoryItemComponent;