import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DeleteWarehouse.scss'

import axios from 'axios';

function DeleteWarehouse({ openDelete }) {
    return (
        <section className='delete-warehouse__background'>
            <div className='delete-warehouse__container'>
                <div className='delete-warehouse__close-button'>
                    <button onClick={() => { openDelete(false); }}>
                        X
                    </button>
                </div>
                <div className='delete-warehouse__buttons'>
                    <button className='delete-warehouse__buttons-cancel' onClick={() => { openDelete(false); }}>
                        Cancel
                    </button>
                    <button className='delete-warehouse__buttons-delete'>
                        Delete
                    </button>

                </div>
            </div>
        </section>
    );
}

export default DeleteWarehouse;