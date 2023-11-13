import './WarehouseDetails.scss';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import edit from '../../assets/icons/edit-24px.svg';
import arrowback from '../../assets/icons/arrow_back-24px.svg';



function WarehouseDetails(){
    
    return(
        <>
        <section className="warehouse-inventory">
            <div className="warehouse-inventory__title-container">
            {/* <Link to="/warehouses"> */}
                <img className="warehouse-inventory__title-icon" src={arrowback} alt="arrow back" />
            {/* </Link> */}
                <h1 className="warehouse-inventory__title">'Warehouse'</h1>
                <button className="button__button button__edit"><img src={edit} alt="edit"/></button>
            </div>
            <section className="warehouse-inventory__subheader">
                <section className='warehouse-inventory__box-1'>
                <div className="warehouse-inventory__subheader--address">
                    <h3 className='warehouse-inventory__ table__position1'>Warehouse Address:</h3>
                    <p className='warehouse-inventory__ table__position2'>'JSX address'</p>
                    <p className='warehouse-inventory__ table__position4'>'JSX city', 'state'</p>
                </div>
                </section>
                <section className='warehouse-inventory__box-2'>
                    <div className="warehouse-inventory__subheader--contact">
                    <div className="warehouse-inventory__subheader--contact-name">
                        <h3 className='warehouse-inventory__'>Contact Name:</h3>
                        <p className='warehouse-inventory__'>'JSX name'</p>
                        <p className='warehouse-inventory__'>' JSX position'</p>
                    </div>
                    <div className="warehouse-inventory__subheader--contact-info">
                        <h3 className='warehouse-inventory__'>Contact Information:</h3>
                        <p className='warehouse-inventory__'>'JSX phone'</p>
                        <p className='warehouse-inventory__'>'JSX email'</p>
                    </div>
                    </div>
                </section>
            </section>
        </section>
        </>
    )
}

export default WarehouseDetails;