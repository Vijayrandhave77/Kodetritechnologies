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
import Notifications from "./views/ecommerce/notification/Notifications";
import Coupans from "./views/ecommerce/coupan/All";
import CoupansCreate from "./views/ecommerce/coupan/Create";
import Page from "./views/cms/pages/All";
import PageCreate from "./views/cms/pages/Create";
import PageTrash from "./views/cms/pages/Trash";
import BlogPage from "./views/cms/blogs/All";
import BlogCreate from "./views/cms/blogs/Create";
import BlogTrash from "./views/cms/blogs/Trash";
import FaqsPage from "./views/cms/faqs/All";
import FaqsCreate from "./views/cms/faqs/Create";
import FaqsTrash from "./views/cms/faqs/Trash";
import ContactPage from "./views/cms/contacts/All";
import ContactTrash from "./views/cms/contacts/Trash";
import ContactDetails from "./views/cms/contacts/Details";
import TestimonialsPage from "./views/cms/testimonials/All";
import TestimonialsCreate from "./views/cms/testimonials/Create";
import TestimonialsTrash from "./views/cms/testimonials/Trash";
import PaymentSetting from "./views/configuration/settings/PaymentSetting";
import WebsiteSetting from "./views/configuration/settings/WebsiteSetting";
import StoreSetting from "./views/configuration/settings/StoreSetting";
import FooterSetting from "./views/configuration/settings/FooterSetting";
import Customer from "./views/users/customers/All";
import CustomerCreate from "./views/users/customers/Create";
import CustomerTrash from "./views/users/customers/Trash";
import AdminLogsPage from "./views/dashboardlogs/adminlogs/All";
import MailLogsPage from "./views/dashboardlogs/mailogs/All";
import MailLogsDetails from "./views/dashboardlogs/mailogs/Details";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Status from "./views/configuration/masters/Status";
import Tages from "./views/configuration/masters/Tags";
import Brands from "./views/configuration/masters/Brands";
import Categories from "./views/configuration/masters/Categories";
import Regions from "./views/configuration/masters/Regions";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./authentications/ProtectedRoutes";
import ProtectedPageRoutes from "./authentications/ProtectedPageRoutes";
import SupportTicket from "./views/support/supportTicket/All";
import SupportTicketDetails from "./views/support/supportTicket/SupportTicketDetails";
import Reviews from "./views/ecommerce/Reviews";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedPageRoutes>
              <AdminLayout />
            </ProtectedPageRoutes>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/ecommerce/product/all" element={<Products />} />
          <Route path="/ecommerce/product/create" element={<ProductCreate />} />
          <Route
            path="/ecommerce/product/edit/:id"
            element={<ProductCreate />}
          />
          <Route path="/ecommerce/product/trash" element={<ProductTrash />} />
          <Route path="/ecommerce/order/all" element={<Orders />} />
          <Route
            path="/ecommerce/order/details/:id"
            element={<OrdersDetails />}
          />
          <Route path="/ecommerce/order/trash" element={<OrdersTrash />} />
          <Route path="/ecommerce/coupan/all" element={<Coupans />} />
          <Route path="/ecommerce/coupan/create" element={<CoupansCreate />} />
          <Route
            path="/ecommerce/coupan/:id/edit"
            element={<CoupansCreate />}
          />
          <Route path="/ecommerce/notifications" element={<Notifications />} />
          <Route
            path="/ecommerce/notifications/:id/edit"
            element={<Notifications />}
          />
          <Route path="/ecommerce/reviews" element={<Reviews />} />
          <Route path="/cms/page/all" element={<Page />} />
          <Route path="/cms/page/create" element={<PageCreate />} />
          <Route path="/cms/page/edit/:id" element={<PageCreate />} />
          <Route path="/cms/page/trash" element={<PageTrash />} />
          <Route path="/cms/blog/all" element={<BlogPage />} />
          <Route path="/cms/blog/create" element={<BlogCreate />} />
          <Route path="/cms/blog/:id/edit" element={<BlogCreate />} />
          <Route path="/cms/blog/trash" element={<BlogTrash />} />
          <Route path="/cms/faq/all" element={<FaqsPage />} />
          <Route path="/cms/faq/create" element={<FaqsCreate />} />
          <Route path="/cms/faq/:id/edit" element={<FaqsCreate />} />
          <Route path="/cms/faq/trash" element={<FaqsTrash />} />
          <Route path="/cms/contact/all" element={<ContactPage />} />
          <Route path="/cms/contact/trash" element={<ContactTrash />} />
          <Route path="/cms/contact/:id/details" element={<ContactDetails />} />
          <Route path="/cms/testimonials/all" element={<TestimonialsPage />} />
          <Route
            path="/cms/testimonials/create"
            element={<TestimonialsCreate />}
          />
          <Route
            path="/cms/testimonials/:id/edit"
            element={<TestimonialsCreate />}
          />
          <Route
            path="/cms/testimonials/trash"
            element={<TestimonialsTrash />}
          />
          <Route path="/setting/payment-gatway" element={<PaymentSetting />} />
          <Route path="/setting/website" element={<WebsiteSetting />} />
          <Route path="/setting/store-setting" element={<StoreSetting />} />
          <Route path="/setting/footer-setting" element={<FooterSetting />} />
          <Route path="/master/regions" element={<Regions />} />
          <Route path="/master/categories" element={<Categories />} />
          <Route path="/master/categories/:id/edit" element={<Categories />} />
          <Route path="/master/brands" element={<Brands />} />
          <Route path="/master/brands/:id/edit" element={<Brands />} />
          <Route path="/master/tages" element={<Tages />} />
          <Route path="/master/tages/:id/edit" element={<Tages />} />
          <Route path="/master/status" element={<Status />} />
          <Route path="/master/status/:id/edit" element={<Status />} />
          <Route path="/support/support-ticket" element={<SupportTicket />} />
          <Route
            path="/support/support-ticket/:id/details"
            element={<SupportTicketDetails />}
          />
          <Route path="/customer/all" element={<Customer />} />
          <Route path="/customer/create" element={<CustomerCreate />} />
          <Route path="/customer/:id/edit" element={<CustomerCreate />} />
          <Route path="/customer/trash" element={<CustomerTrash />} />
          <Route path="/log/admin-logs" element={<AdminLogsPage />} />
          <Route path="/log/mail-logs" element={<MailLogsPage />} />
          <Route
            path="/log/mail-logs/details/:id"
            element={<MailLogsDetails />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/signup"
          element={
            <ProtectedRoutes>
              <Signup />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
