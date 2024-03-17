import Navbar from "../features/Auth/Components/Navbar";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";


function AdminProductDetailPage() {
    return ( 
        <div>
            <Navbar>
                <AdminProductDetail></AdminProductDetail>
            </Navbar>
        </div>
     );
}

export default AdminProductDetailPage;