import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "@/utils/axiosInstance"; // make sure this includes the token

const ServicesListPopover = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
    const response = await axios.post("/services", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log("✅ Service created:", response.data);
      alert("✅ Service created successfully!");
    } else {
      console.warn("⚠️ Unexpected response:", response);
      alert("Service creation may have failed. Check logs.");
    }
  } catch (error: any) {
    console.error("❌ Error creating service:", error);

    if (error.response?.data?.message) {
      alert(`Failed: ${error.response.data.message}`);
    } else {
      alert("Failed to create service. Please try again.");
    }
  }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-secondary text-white">Add New Service</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <Label htmlFor="name">Service Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="icon">Service Icon</Label>
            <Input id="icon" name="icon" type="file" accept="image/*" required />
          </div>
          <div>
            <Label htmlFor="image">Service Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" required />
          </div>
          <div>
            <Label htmlFor="description">Service Description</Label>
            <Input id="description" name="description" required />
          </div>
          <div>
            <Label htmlFor="btn_text">Service Button Text</Label>
            <Input id="btn_text" name="btn_text" required />
          </div>
          <Button type="submit" className="w-full bg-primary">
            Create Service
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default ServicesListPopover;
