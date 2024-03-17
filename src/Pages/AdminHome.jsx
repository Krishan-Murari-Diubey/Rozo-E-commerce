import Navbar from "../features/Auth/Components/Navbar";
import AdminProductList from "../features/admin/components/AdminProductList";

function AdminHome() {
    return ( 
        <div>
            <Navbar>
                <AdminProductList></AdminProductList>
            </Navbar>
        </div>
     );
}

export default AdminHome;