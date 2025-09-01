import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import WebsiteForm from "../pages/WebsiteForm";
function AdminLayout() {
  const { website, loading } = useContext(AuthContext);
  return (
    <>
      <div className="layout" style={{ opacity: `${website ? "1" : "0.3"}` }}>
        <AdminSidebar />
        <div className="right">
          <Header></Header>
          <div className="main-page">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      {!website && !loading && <WebsiteForm />}
    </>
  );
}

export default AdminLayout;
