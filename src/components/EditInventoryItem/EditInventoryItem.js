import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditInventoryItem.scss';

function EditInventoryItemComponent({ itemId }) {
    const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        category: '',
        status: 'in stock',
        quantity: 1,
        warehouse: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // TODO: Fetch the item data from the API and populate the form
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
            // TODO: Handle the success scenario, like redirecting to the inventory list or showing a success message
        } catch (error) {
            console.error("There was an error updating the inventory item:", error.response || error);
            // TODO: Handle the error scenario, like displaying an error message to the user
        }
    };

    return (
        <form className="edit-inventory-item-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="itemName">Item Name:</label>
            <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
            />
            {errors.itemName && <p className="error">{errors.itemName}</p>}

            {/* Description Field */}
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            ></textarea>
            {errors.description && <p className="error">{errors.description}</p>}

            {/* Category Dropdown */}
            <label htmlFor="category">Category:</label>
            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
            >
                <option value="">Select a category</option>
                {/* Add category options here */}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}

            <div>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="in stock"
                        checked={formData.status === 'in stock'}
                        onChange={handleChange}
                    />
                    In Stock
                </label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="out of stock"
                        checked={formData.status === 'out of stock'}
                        onChange={handleChange}
                    />
                    Out of Stock
                </label>
            </div>
            
            {formData.status === 'in stock' && (
                <>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                    />
                    {errors.quantity && <p className="error">{errors.quantity}</p>}
                </>
            )}
            <label htmlFor="warehouse">Warehouse:</label>
            <select // TO-DO: Populate with options from database
                id="warehouse"
                name="warehouse"
                value={formData.warehouse}
                onChange={handleChange}
            >
            </select>
            {errors.warehouse && <p className="error">{errors.warehouse}</p>}
            <button type="submit">Save</button>
        </form>
    );
}

export default EditInventoryItemComponent;