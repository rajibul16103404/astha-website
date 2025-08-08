import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/table";
import axios from "@/utils/axiosInstance";
import ServicesListPopover from "@/components/ServicesListPopover";
const baseUrl = import.meta.env.VITE_API_URL;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

const ServicesList = () => {
  const [services, setServices] = useState<any[]>([]); // Ensure it's always an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/services") // Update with your actual API URL
      .then((res) => {
        // ✅ Check if response is an array
        if (Array.isArray(res.data)) {
          setServices(res.data);
        } else {
          console.error("API did not return an array:", res.data);
          setServices([]); // fallback
        }
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setServices([]); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-5">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl p-5 m-auto mb-5 bg-primary text-white rounded w-fit">
        Services List
      </h1>
      <ServicesListPopover />
      {loading ? (
              <div className="p-5">Loading...</div>
            ) : (
              <Table className="mt-5">
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Service Name</TableHead>
                    <TableHead>Service Icon</TableHead>
                    <TableHead>Service Image</TableHead>
                    <TableHead>Service Description</TableHead>
                    <TableHead>Service Button Text</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.length > 0 ? (
                    services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{service.service_name}</TableCell>
                        <TableCell><img src={`${imageUrl}${service.service_icon}`} alt="Service Icon" /></TableCell>
                        <TableCell><img src={`${imageUrl}${service.service_image}`} alt="Service Image" /></TableCell>
                        <TableCell>{service.service_description}</TableCell>
                        <TableCell>{service.service_button_text}</TableCell>
                        <TableCell>
                          <button>Edit</button>
                          <button>Delete</button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4}>No services found.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
    </div>
  );
};

export default ServicesList;
