import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowBackIcon from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './InventoryItemDetails.scss';

function InventoryItemDetailsComponent() {
    const [itemDetails, setItemDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/inventories/${id}`);
                setItemDetails(response.data);
            } catch (error) {
                console.error('Error fetching item details:', error);
                setError(`Failed to fetch item details: ${error.message}`);
            }
            setLoading(false);
        };

        fetchItemDetails();
    }, [id]);

    const handleEdit = () => {
        navigate(`/inventory/edit`);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!itemDetails) return <div>Item not found.</div>;


    return (
        <section className="inventory-item-details">
            <div className="inventory-item-detail__title-container">
                <Link to="/inventory">
                    <img className="inventory-item-detail__title-icon" src={arrowBackIcon} alt="arrow back icon" />
                </Link>
                <h1 className="inventory-item-detail__title">{itemDetails?.item_name}</h1>
                <img onClick={handleEdit} src={editIcon} alt="arrow back icon"></img>
            </div>
            <div className="inventory-item-detail__description-container">
                <div className="inventory-item-detail__item-container">
                    <span className="inventory-item-detail__label">Item description:</span>
                    <p className="inventory-item-detail__value">{itemDetails?.description}</p>
                    <span className="inventory-item-detail__label">Category:</span>
                    <p className="inventory-item-detail__value">{itemDetails?.category}</p>
                </div>
                <div className="inventory-item-detail__info-container">
                    <div className="inventory-item-detail__stock">
                        <span className="inventory-item-detail__label">Status:</span>
                        <p className="inventory-item-detail__value"></p>
                        <span className="inventory-item-detail__label">Quantity:</span>
                        <p className="inventory-item-detail__value">{itemDetails?.quantity}</p>
                        <span className="inventory-item-detail__label">Warehouse:</span>
                    </div>
                    <p className="inventory-item-detail__value">{itemDetails?.warehouse_id}</p>
                </div>
            </div>
        </section>
    );
}

export default InventoryItemDetailsComponent;