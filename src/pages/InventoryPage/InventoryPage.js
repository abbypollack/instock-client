import InventoryTable from '../../components/InventoryTable/InventoryTable';

function InventoryPage() {
    return (
        <div>
            <h1>Inventory</h1>
            {/* <SearchBar />
            <AddButton text={Item}/> */}
            <InventoryTable />
        </div>
    )
}
export default InventoryPage;