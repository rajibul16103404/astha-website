import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsSpeedometer2,
  BsBoxSeam,
  BsBarChart,
  BsBoxArrowRight,
} from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <BsSpeedometer2 />, path: "/admin/dashboard" },
    { label: "Services", icon: <MdOutlineMiscellaneousServices />, path: "/admin/services" },
    { label: "Services Details", icon: <MdOutlineMiscellaneousServices />, path: "/admin/services-details" },
    { label: "Products", icon: <BsBoxSeam />, path: "/admin/products" },
    { label: "Reports", icon: <BsBarChart />, path: "/admin/reports" },
    { label: "Logout", icon: <BsBoxArrowRight />, path: "/admin/logout" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`
          ${isOpen ? "w-64" : "w-20"} 
          bg-primary text-white p-4 
          flex flex-col 
          sticky top-0 h-screen 
          transition-all duration-300
        `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 focus:outline-none"
        >
          {isOpen ? (
            <BsArrowLeftSquareFill className="text-3xl" />
          ) : (
            <BsArrowRightSquareFill className="text-3xl" />
          )}
        </button>

        <div className="flex justify-center mb-10">
          <img
            src="/lovable-uploads/0c304457-f71b-4d2c-be41-05d9307c31a81.png"
            alt="logo"
            className="bg-white rounded-full p-2"
          />
        </div>

        <ul className="space-y-2 flex-1 overflow-auto">
          {menuItems.map(({ label, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path} className="rounded cursor-pointer">
                <Link
                  to={path}
                  className={`flex items-center gap-3 p-3 rounded transition-all duration-200
                    ${
                      isActive
                        ? "border border-white bg-primary text-white"
                        : "hover:bg-white hover:text-primary hover:border hover:border-primary"
                    }`}
                >
                  <span className="text-xl">{icon}</span>
                  {isOpen && <span className="text-base">{label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminHeader;