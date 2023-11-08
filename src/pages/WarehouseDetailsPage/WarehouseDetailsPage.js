import WarehouseDetailsTable from '../../components/WarehouseDetailsTable/WarehouseDetailsTable';
import WarehouseDetailsHeader from '../../components/WarehouseDetailsHeader/WarehouseDetailsHeader';
import './WarehouseDetailsPage.scss';

function WarehouseDetailsPage() {
    return (
        <div className="page__constraints">
            <WarehouseDetailsHeader />
            <WarehouseDetailsTable />
        </div>
    )
}
export default WarehouseDetailsPage;