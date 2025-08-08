import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/table";
import axios from "axios";
import { Select } from "@/components/ui/select"; // Or your custom select
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_API_URL;

const ServicesDetailsList = () => {
  const [services, setServices] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  const fetchServices = async (categoryId: string = "") => {
    setLoading(true);
    try {
      const url = categoryId
        ? `${baseUrl}/services?category=${categoryId}`
        : `${baseUrl}/services`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(res.data)) {
        setServices(res.data);
      } else {
        console.error("Unexpected service response:", res.data);
        setServices([]);
      }
    } catch (err) {
      toast.error("Failed to load services");
      console.error(err);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(res.data)) {
        setCategories(res.data);
      } else {
        console.error("Unexpected category response:", res.data);
        setCategories([]);
      }
    } catch (err) {
      toast.error("Failed to load categories");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchCategories();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    fetchServices(value); // Fetch filtered services
  };

  return (
    <div>
      <h1 className="text-3xl p-5 m-auto mb-5 bg-primary text-white rounded w-fit">
        Services Details List
      </h1>

      <div className="flex justify-between items-center gap-4 p-5">
        <button className="bg-secondary py-1 px-5 text-white rounded">Add New</button>

        <select
          className="border px-4 py-2 rounded"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="p-5">Loading...</div>
      ) : (
        <Table className="mt-5">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Service Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.length > 0 ? (
              services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell>{service.price}</TableCell>
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

export default ServicesDetailsList;
