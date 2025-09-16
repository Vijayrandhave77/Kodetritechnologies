import { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaPenAlt, FaQuoteLeft, FaUsers, FaUserShield } from "react-icons/fa";
import { FaBasketShopping, FaBox, FaUsersRectangle } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdNotifications,
} from "react-icons/io";
import {
  IoDocumentTextSharp,
  IoNavigate,
  IoSettings,
  IoTicket,
  IoWalletSharp,
} from "react-icons/io5";
import { MdEmail, MdReviews, MdSupportAgent } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiFiles } from "react-icons/si";
import { TfiLayoutSlider } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [cms, setCms] = useState(false);
  const handleDropdown = (menuType) => {
    if (type === menuType) {
      setShow(!show);
    } else {
      setType(menuType);
      setShow(true);
    }
  };

  return (
    <div className="admin-sidebar">
      <NavLink to="/" className="sidebar-title cursor-pointer">
        <GrUserAdmin className="font-extrabold text-3xl" />
        <span className="">Admin Dashboard</span>
      </NavLink>
      <div className="sideMain">
        <div className="side_links">
          <h3>ECOMMERCE</h3>
          <ul>
            <li
              onClick={() => {
                handleDropdown("product");
                setType("product");
              }}
            >
              <span>
                <FaBasketShopping />
                Products
              </span>
              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "product" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "product" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="ecommerce/product/all">
                  <span>All Products</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="ecommerce/product/create">
                  <span>Add Products</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="ecommerce/product/trash">
                  <span>Trash Products</span>
                </NavLink>
              </li>
            </ul>
            <li
              onClick={() => {
                handleDropdown("order");
                setType("order");
              }}
            >
              <span>
                <FaBox />
                Orders
              </span>

              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "order" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "order" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="ecommerce/order/all">
                  <span>All Orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="ecommerce/order/trash">
                  <span>Trash Orders</span>
                </NavLink>
              </li>
            </ul>
            <li
              onClick={() => {
                handleDropdown("coupons");
                setType("coupons");
              }}
            >
              <span>
                <IoTicket />
                Coupons
              </span>
              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "coupons" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "coupons" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="ecommerce/coupan/all">
                  <span>All Coupons</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="ecommerce/coupan/create">
                  <span>Add Coupons</span>
                </NavLink>
              </li>
            </ul>
            <li>
              <NavLink to="ecommerce/notifications" className="customeRoute">
                <span>
                  <IoMdNotifications />
                  Notifications
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="ecommerce/reviews" className="customeRoute">
                <span>
                  <MdReviews />
                  All Reviews
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="side_links">
          <ul>
            <li
              onClick={() => {
                handleDropdown("cms");
                setType("cms");
              }}
            >
              <span>
                <BsGrid3X3GapFill />
                CMS
              </span>

              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "cms" ? "rotate(90deg)" : ""}`,
                }}
              />
            </li>
            <ul
              className="cms_sidelinks"
              style={{
                display:
                  show && type == "cms"
                    ? "inline-block"
                    : cms
                      ? "inline-block"
                      : "none",
              }}
            >
              <li
                onClick={() => {
                  handleDropdown("pages");
                  setType("pages");
                  setCms(true);
                }}
              >
                <span>
                  <IoDocumentTextSharp />
                  Pages
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "pages" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display: show && type == "pages" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/page/all">
                    <span>All Pages</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/page/create">
                    <span>Add Pages</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/page/trash">
                    <span>Trash Pages</span>
                  </NavLink>
                </li>
              </ul>
              <li
                onClick={() => {
                  handleDropdown("blogs");
                  setType("blogs");
                  setCms(true);
                }}
              >
                <span>
                  <FaPenAlt />
                  Blogs
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "blogs" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display: show && type == "blogs" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/blog/all">
                    <span>All Blogs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/blog/create">
                    <span>Add Blogs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/blog/trash">
                    <span>Trash Blogs</span>
                  </NavLink>
                </li>
              </ul>
              <li
                onClick={() => {
                  handleDropdown("navigation");
                  setType("navigation");
                  setCms(true);
                }}
              >
                <span>
                  <IoNavigate />
                  Navigations
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "navigation" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display:
                    show && type == "navigation" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/navigation/all">
                    <span>All Navigations</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/navigation/create">
                    <span>Create Navigations</span>
                  </NavLink>
                </li>
              </ul>
              <li>
                <NavLink to="cms/files" className="customeRoute">
                  <span>
                    <SiFiles />
                    Files
                  </span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  handleDropdown("slider");
                  setType("slider");
                  setCms(true);
                }}
              >
                <span>
                  <TfiLayoutSlider />
                  Sliders
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "slider" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display: show && type == "slider" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/sliders/all">
                    <span>All Sliders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/slider/create">
                    <span>Create Sliders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/sliders/create">
                    <span>Trash Sliders</span>
                  </NavLink>
                </li>
              </ul>
              <li
                onClick={() => {
                  handleDropdown("contact");
                  setType("contact");
                  setCms(true);
                }}
              >
                <span>
                  <RiContactsBook3Fill />
                  Contacts
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "contact" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display: show && type == "contact" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/contacts/all">
                    <span>All Contacts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/contacts/trash">
                    <span>Trash Contacts</span>
                  </NavLink>
                </li>
              </ul>
              <li
                onClick={() => {
                  handleDropdown("faq");
                  setType("faq");
                  setCms(true);
                }}
              >
                <span>
                  <FaQuoteLeft />
                  FAQs
                </span>
                <IoIosArrowForward
                  className="arrow"
                  style={{
                    transform: `${show && type == "faq" ? "rotate(90deg)" : ""
                      }`,
                  }}
                />
              </li>
              <ul
                className="inner_sidelinks"
                style={{
                  display: show && type == "faq" ? "inline-block" : "none",
                }}
              >
                <li>
                  <NavLink to="cms/faq/all">
                    <span>All FAQs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/faq/create">
                    <span>Create FAQs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cms/faq/trash">
                    <span>Trash FAQs</span>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="side_links">
          <h3>CONFIGURATION</h3>
          <ul>
            <li
              onClick={() => {
                handleDropdown("settings");
                setType("settings");
              }}
            >
              <span>
                <IoSettings />
                Settings
              </span>
              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "settings" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "settings" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="setting/payment-gatway" className="customeRoute">
                  <span>Payment Gateway</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="setting/website" className="customeRoute">
                  <span>Website Setting</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="setting/store-setting" className="customeRoute">
                  <span>Store Settings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="setting/footer-setting" className="customeRoute">
                  <span>Footer Settings</span>
                </NavLink>
              </li>
            </ul>
            <li
              onClick={() => {
                handleDropdown("master");
                setType("master");
              }}
            >
              <span>
                <AiFillDatabase />
                Master
              </span>
              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "master" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "master" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="master/categories" className="customeRoute">
                  <span>Categories</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="master/brands" className="customeRoute">
                  <span>Brands</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="master/regions" className="customeRoute">
                  <span>Regions</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="master/tages" className="customeRoute">
                  <span>Tages</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="master/status" className="customeRoute">
                  <span>Status</span>
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
        <div className="side_links">
          <h3>SUPPORT</h3>
          <ul>
            <li>
              <NavLink to="support-ticket" className="customeRoute">
                <span>
                  <MdSupportAgent />
                  Support Ticket
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="side_links">
          <h3>USERS</h3>
          <ul>
            <li
              onClick={() => {
                handleDropdown("customer");
                setType("customer");
              }}
            >
              <span>
                <FaUsers />
                Customers
              </span>
              <IoIosArrowForward
                className="arrow"
                style={{
                  transform: `${show && type == "customer" ? "rotate(90deg)" : ""
                    }`,
                }}
              />
            </li>
            <ul
              className="inner_sidelinks"
              style={{
                display: show && type == "customer" ? "inline-block" : "none",
              }}
            >
              <li>
                <NavLink to="customer/all" className="customeRoute">
                  <span>All Customers</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="customer/create" className="customeRoute">
                  <span>Add Customers</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="customer/trash" className="customeRoute">
                  <span>Trash Customers</span>
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
        <div className="side_links">
          <h3>LOGS</h3>
          <ul>
            <li>
              <NavLink to="log/admin-logs" className="customeRoute">
                <span>
                  <MdEmail />
                  Admin Logs
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="log/mail-logs" className="customeRoute">
                <span>
                  <MdEmail />
                  Mail Logs
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sideclose">
        <IoIosArrowBack />
      </div>
    </div>
  );
}

export default AdminSidebar;
