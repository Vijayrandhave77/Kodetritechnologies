import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
function AdminLayout() {
  const { admin } = useContext(AuthContext);
  return (
    <div className="layout">
      <AdminSidebar />
      <div className="right">
        <Header></Header>
        <div className="main-page">
          {admin ? <Outlet /> : <Navigate to="/login" />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
