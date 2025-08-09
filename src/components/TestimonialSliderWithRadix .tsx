import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";


const TestimonialSlider = () => {

  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;


  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonial.length;

  const slideWidthPercent = 65; // width of one slide in percent
  const slideGap = 16; // gap between slide and arrows (pixels)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

      useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await axios.get(`${API_URL}/homepage`);
        const data = response.data;
        setTestimonial(data.testimonial || []);
      } catch (error) {
        console.error('Error fetching Testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [API_URL]);

  return (
    <>
    <div className="relative flex items-center justify-center max-w-6xl mx-auto px-4" style={{ gap: slideGap }}>
      {/* Left arrow */}
      <button
        onClick={handlePrev}
        className="z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        style={{ marginRight: slideGap }}
        aria-label="Previous testimonial"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Slider viewport */}
      <div
        className="overflow-hidden w-full"
        style={{ maxWidth: `${slideWidthPercent}%` }}
      >
        <motion.div
          className="flex"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(100 / total) * currentIndex}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {testimonial.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg p-8 mx-auto"
              style={{ width: `${100 / total}%` }}
            >
              <Quote className="h-10 w-10 text-primary opacity-20 mb-4" />
              <p className="text-gray-600 italic mb-6">“{t.quote}”</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary">
                    {t.author_image ? <img
                        src={`${IMAGE_URL}${t.author_image}`}
                        alt={t.author_name}
                        className="w-10 h-10 rounded-full object-cover"
                      /> : t?.author_name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{t.author_name}</h4>
                  <p className="text-gray-600 text-sm">{t.author_info}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right arrow */}
      <button
        onClick={handleNext}
        className="z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        style={{ marginLeft: slideGap }}
        aria-label="Next testimonial"
      >
        <ArrowRight size={24} />
      </button>
    </div>
    </>
  );
};

export default TestimonialSlider;
