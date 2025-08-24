import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./layout/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import Products from "./views/ecommerce/products/All";
import ProductCreate from "./views/ecommerce/products/Create";
import ProductTrash from "./views/ecommerce/products/Trash";
import Orders from "./views/ecommerce/orders/All";
import OrdersDetails from "./views/ecommerce/orders/Details";
import OrdersTrash from "./views/ecommerce/orders/Trash";
import Coupans from "./views/ecommerce/coupan/All";
import CoupansCreate from "./views/ecommerce/coupan/Create";
import Wallets from "./views/ecommerce/wallets/Create";
import Page from "./views/cms/pages/All";
import PageCreate from "./views/cms/pages/Create";
import PageTrash from "./views/cms/pages/Trash";
import BlogPage from "./views/cms/blogs/All";
import BlogCreate from "./views/cms/blogs/Create";
import BlogTrash from "./views/cms/blogs/Trash";
import FaqsPage from "./views/cms/faqs/All";
import FaqsCreate from "./views/cms/faqs/Create";
import FaqsTrash from "./views/cms/faqs/Trash";
import PaymentSetting from "./views/configuration/settings/PaymentSetting";
import WebsiteSetting from "./views/configuration/settings/WebsiteSetting";
import StoreSetting from "./views/configuration/settings/StoreSetting";
import FooterSetting from "./views/configuration/settings/FooterSetting";
import Customer from "./views/users/customers/All";
import CustomerCreate from "./views/users/customers/Create";
import CustomerTrash from "./views/users/customers/Trash";
import Admin from "./views/users/admins/All";
import AdminCreate from "./views/users/admins/Create";
import AdminTrash from "./views/users/admins/Trash";
import Vendor from "./views/users/vendors/All";
import VendorCreate from "./views/users/vendors/Create";
import VendorTrash from "./views/users/vendors/Trash";
import AdminLogsPage from "./views/dashboardlogs/adminlogs/All";
import AdminLogsDetails from "./views/dashboardlogs/adminlogs/Details";
import MailLogsPage from "./views/dashboardlogs/mailogs/All";
import MailLogsDetails from "./views/dashboardlogs/mailogs/Details";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Units from "./views/configuration/masters/Units";
import Status from "./views/configuration/masters/Status";
import Tages from "./views/configuration/masters/Tags";
import Brands from "./views/configuration/masters/Brands";
import Categories from "./views/configuration/masters/Categories";
import Regions from "./views/configuration/masters/Regions";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/product/all" element={<Products />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/edit/:id" element={<ProductCreate />} />
          <Route path="/product/trash" element={<ProductTrash />} />
          <Route path="/order/all" element={<Orders />} />
          <Route path="/order/details/:id" element={<OrdersDetails />} />
          <Route path="/order/trash" element={<OrdersTrash />} />
          <Route path="/coupan/all" element={<Coupans />} />
          <Route path="/coupan/create" element={<CoupansCreate />} />
          <Route path="/notifications" element={<Wallets />} />
          <Route path="/reviews" element={<Wallets />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/cms/page/all" element={<Page />} />
          <Route path="/cms/page/create" element={<PageCreate />} />
          <Route path="/cms/page/edit/:id" element={<PageCreate />} />
          <Route path="/cms/page/trash" element={<PageTrash />} />
          <Route path="/cms/blog/all" element={<BlogPage />} />
          <Route path="/cms/blog/create" element={<BlogCreate />} />
          <Route path="/cms/blog/edit/:id" element={<BlogCreate />} />
          <Route path="/cms/blog/trash" element={<BlogTrash />} />
          <Route path="/cms/faq/all" element={<FaqsPage />} />
          <Route path="/cms/faq/create" element={<FaqsCreate />} />
          <Route path="/cms/faq/edit/:id" element={<FaqsCreate />} />
          <Route path="/cms/faq/trash" element={<FaqsTrash />} />
          <Route path="/setting/payment-gatway" element={<PaymentSetting />} />
          <Route path="/setting/website" element={<WebsiteSetting />} />
          <Route path="/setting/store-setting" element={<StoreSetting />} />
          <Route path="/setting/footer-setting" element={<FooterSetting />} />
          <Route path="/master/regions" element={<Regions />} />
          <Route path="/master/categories" element={<Categories />} />
          <Route path="/master/brands" element={<Brands />} />
          <Route path="/master/tages" element={<Tages />} />
          <Route path="/master/status" element={<Status />} />
          <Route path="/master/units" element={<Units />} />
          <Route path="/customer/all" element={<Customer />} />
          <Route path="/customer/create" element={<CustomerCreate />} />
          <Route path="/customer/edit/:id" element={<CustomerCreate />} />
          <Route path="/customer/trash" element={<CustomerTrash />} />
          <Route path="/admin/all" element={<Admin />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/edit/:id" element={<AdminCreate />} />
          <Route path="/admin/trash" element={<AdminTrash />} />
          <Route path="/vendor/all" element={<Vendor />} />
          <Route path="/vendor/create" element={<VendorCreate />} />
          <Route path="/vendor/edit/:id" element={<VendorCreate />} />
          <Route path="/vendor/trash" element={<VendorTrash />} />
          <Route path="/log/admin-logs" element={<AdminLogsPage />} />
          <Route
            path="/log/admin-logs/details/:id"
            element={<AdminLogsDetails />}
          />
          <Route path="/log/mail-logs" element={<MailLogsPage />} />
          <Route
            path="/log/mail-logs/details/:id"
            element={<MailLogsDetails />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
