import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AdminLayout() {
  return (
    <div className="layout">
      <AdminSidebar />
      <div className="right">
        <Header></Header>
        <div className="main-page">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
