import React, { useState , useEffect } from 'react';
import X from '../../assets/icons/close-24px.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DeleteModalInv.scss';


function DeleteInventory({ openDelete, inventory }) {
    const navigate = useNavigate();
    console.log(inventory)
    let deleteInventory = async () => {
        try {
            await axios.delete(`http://localhost:8081/api/inventories/${inventory.id}`);
            openDelete(false);
            window.location.reload();
        }
        catch (error) {
            console.error(error);
        }
    };
    return (
        <section className='delete-inventory__background'>
        <div className='delete-inventory__container'>
            <div className='delete-inventory__close-button'>
                <img src={X} onClick={() => { openDelete(false); }}>
                </img>
            </div>
            <div className='delete-inventory__header'>
                {`Delete ${inventory.item_name} inventory?`}
            </div>
            <div className='delete-inventory__buttons-bottom'>
                <p className='delete-inventory__body'>
                    {`Please confirm that you'd like to delete the ${inventory.item_name} inventory from the list of inventory. You won't be able to undo this action`}
                </p>
                <div className='delete-inventory__buttons'>
                    <button className='delete-inventory__buttons-cancel' onClick={() => { openDelete(false); }}>
                        Cancel
                    </button>
                    <button className='delete-inventory__buttons-delete'
                        onClick={deleteInventory}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </section>
    );
}


export default DeleteInventory;