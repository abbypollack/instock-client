import "./WarehouseDetailsPage.scss";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import WarehouseDetailstable from "../../components/WarehouseDetailsTable/WarehouseDetailsTable";

function WarehouseDetailsPage({ warehouse }) {
    const [warehouseDetails, setWarehouseDetails] = useState();
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWarehouseDetails = async () => {
        try {
            console.log(warehouseId);
            const response = await axios.get(
            `http://localhost:8081/api/warehouses/${warehouseId}`
            );
            setWarehouseDetails(response.data);
        } catch (error) {
            console.error("this is the error: ", error);
        }
        };

        fetchWarehouseDetails();
    }, [warehouseId]);

  const handleEdit = () => {
    navigate(`/warehouses/edit/${warehouseId}`);
  };

  function handleCancel() {
    navigate(-1);
  }
  return (
    <>
      <section className="warehouse-inventory">
        <div className="warehouse-inventory__title-container">
          <div className="warehouse-inventory__block-1">
            <img
              className="warehouse-inventory__title-icon"
              src={arrowBackIcon}
              alt="arrow back"
              onClick={handleCancel}
            />
            <h1 className="warehouse-inventory__title">
              {warehouseDetails?.warehouse_name}
            </h1>
          </div>
          <button className="button__button" onClick={handleEdit}>
            <img src={editIcon} alt="edit" />
            <span className="button__edit">Edit</span>
          </button>
        </div>
        <section className="warehouse-inventory__subheader">
          <section className="warehouse-inventory__box-1">
            <div className="warehouse-inventory__subheader--address">
              <h3 className="warehouse-inventory__sub-title">
                Warehouse Address:
              </h3>
              <p className="warehouse-inventory__address">
                {warehouseDetails?.address}
              </p>
              <p className="warehouse-inventory__address">
                {warehouseDetails?.city}, {warehouseDetails?.state}{" "}
                {warehouseDetails?.country}
              </p>
            </div>
          </section>
          <section className="warehouse-inventory__box-2">
            <div className="warehouse-inventory__subheader--contact">
              <div className="warehouse-inventory__subheader--contact-name">
                <h3 className="warehouse-inventory__sub-title">
                  Contact Name:
                </h3>
                <p className="warehouse-inventory__">
                  {warehouseDetails?.contact_name}
                </p>
                <p className="warehouse-inventory__">
                  {warehouseDetails?.contact_position}
                </p>
              </div>
              <div className="warehouse-inventory__subheader--contact-info">
                <h3 className="warehouse-inventory__sub-title">
                  Contact Information:
                </h3>
                <p className="warehouse-inventory__">
                  {warehouseDetails?.contact_phone}
                </p>
                <p className="warehouse-inventory__">
                  {warehouseDetails?.contact_email}
                </p>
              </div>
            </div>
          </section>
        </section>
        <div className="warehouse-inventory__table">
          <WarehouseDetailstable />
        </div>
      </section>
    </>
  );
}

export default WarehouseDetailsPage;