import arrowback from '../../assets/icons/arrow_back-24px.svg'
// import EditButton from '../EditButton/EditButton'
import './WarehouseDetailsHeader.scss';

function WarehouseDetailsHeader() {
    return (
        <div className="warehouse-inventory">
            <section className="warehouse-inventory__header">
            <h1><img src={arrowback} alt="arrow back" />'JSX Warehouse'</h1>
            {/* <EditButton /> */}
            </section>
            <section className="warehouse-inventory__subheader">
            <div className="warehouse-inventory__subheader--address">
                <h3>Warehouse Address:</h3>
                <p>'JSX address'</p>
                <p>'JSX city', 'state'</p>
            </div>
            <div className="warehouse-inventory__subheader warehouse-inventory__subheader--contact">
                <div className="warehouse-inventory__subheader--contact-name">
                    <h3>Contact Name:</h3>
                    <p>'JSX name'</p>
                    <p>' JSX position'</p>
                </div>
                <div className="warehouse-inventory__subheader--contact-info">
                    <h3>Contact Information:</h3>
                    <p>'JSX phone'</p>
                    <p>'JSX email'</p>
                </div>
            </div>
            </section>
        </div>
        )
    }

export default WarehouseDetailsHeader;


