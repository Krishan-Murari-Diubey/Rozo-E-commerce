import Navbar from "../features/Auth/Components/Navbar";
import AdminOrders from "../features/admin/components/AdminOrders";

import React from 'react'

const AdminOrdersPage = () => {
  return (
    <div>
    <Navbar>
        <AdminOrders></AdminOrders>
    </Navbar>
</div>
  )
}

export default AdminOrdersPage
