import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeleteWarehouse.scss'

import axios from 'axios';

function DeleteWarehouse({ openDelete, warehouse }) {
    const navigate = useNavigate();
    let deleteWarehouse = async () => {
        try {
            await axios.delete(`http://localhost:8081/api/warehouses/${warehouse.id}`);
            openDelete(false);
            window.location.reload();
        }
        catch (error) {
            console.error(error);
        }
    };
    return (
        <section className='delete-warehouse__background'>
            <div className='delete-warehouse__container'>
                <div className='delete-warehouse__close-button'>
                    <button onClick={() => { openDelete(false); }}>
                        X
                    </button>
                </div>
                <div className='delete-warehouse__header'>
                    {`Delete ${warehouse.warehouse_name} warehouse?`}
                </div>
                <div className='delete-warehouse__body'>
                    {`Please confirm that you'd like to delete the ${warehouse.warehouse_name} warehouse from the list of warehouses. You won't be able to undo this action`}
                </div>
                <div className='delete-warehouse__buttons'>
                    <button className='delete-warehouse__buttons-cancel' onClick={() => { openDelete(false); }}>
                        Cancel
                    </button>
                    <button className='delete-warehouse__buttons-delete'
                    onClick={deleteWarehouse}>
                        Delete
                    </button>

                </div>
            </div>
        </section>
    );
}

export default DeleteWarehouse;