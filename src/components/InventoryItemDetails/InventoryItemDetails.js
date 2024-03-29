import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-white-24px.svg';
import './InventoryItemDetails.scss';

function InventoryItemDetailsComponent() {
    const [itemDetails, setItemDetails] = useState(null);
    const { itemId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/inventories/${itemId}`);
                setItemDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItemDetails();
    }, [itemId]);

    const handleEdit = () => {
        navigate(`/inventory/edit/${itemId}`);
    }

    function handleCancel() {
        navigate(-1);
    }

    return (
        <section className="inventory-item-details">
            <div className="inventory-item-details__title-container">
                <div className="inventory-item-details__title-and-icon">
                    <img className="inventory-item-details__title-icon" onClick={handleCancel} src={arrowBackIcon} alt="arrow back icon" />
                    <h1 className="inventory-item-details__title">{itemDetails?.item_name}</h1>
                </div>
                <div className="inventory-item-details__icon-container" onClick={handleEdit}>
                    <img className="inventory-item-details__icon" src={editIcon} alt="edit icon"></img>
                    <span className="inventory-item-details__edit-text">Edit</span>
                </div>
            </div>
            <div className="inventory-item-details__description-container">
                <div className="inventory-item-details__item-container">
                    <span className="inventory-item-details__label">Item description:</span>
                    <p className="inventory-item-details__value">{itemDetails?.description}</p>
                    <span className="inventory-item-details__label">Category:</span>
                    <p className="inventory-item-details__value">{itemDetails?.category}</p>
                </div>
                <div className="inventory-item-details__info-container">
                    <div className="inventory-item-details__stock">
                        <div className="inventory-item-details__status">
                            <span className="inventory-item-details__label">Status:</span>
                            <button
                                disabled
                                className={`inventory-item-details__value inventory-item-details__value--stock ${itemDetails?.quantity > 0 ? 'inventory-item-details__value--in-stock' : 'inventory-item-details__value--out-of-stock'}`}>
                                {itemDetails?.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                            </button>
                        </div>
                        <div className="inventory-item-details__quantity">
                            <span className="inventory-item-details__label">Quantity:</span>
                            <p className="inventory-item-details__value">{itemDetails?.quantity}</p>
                        </div>
                    </div>
                    <span className="inventory-item-details__label">Warehouse:</span>
                    <p className="inventory-item-details__value">{itemDetails?.warehouse_name}</p>
                </div>
            </div>
        </section>
    );
}

export default InventoryItemDetailsComponent;
