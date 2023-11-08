import InventoryTable from '../InventoryTable/InventoryTable';

function InventoryList() {
    return (
        <div>
            <h1>Inventory List</h1>
            {/* <SearchButton />
            <AddButton text={Item}/> */}
            <InventoryTable />
        </div>
    )
}
export default InventoryList;