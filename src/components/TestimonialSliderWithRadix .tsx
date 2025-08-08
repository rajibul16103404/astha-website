import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Astha Insight transformed our online presence with their creative strategies and deep understanding of digital trends. We saw a 50% increase in engagement!",
    name: "Emily Carter",
    title: "Marketing Director, TechNova",
  },
  {
    quote:
      "Their team’s expertise and dedication were evident from day one. We’re extremely satisfied with the results and the ongoing support we receive.",
    name: "Michael Chen",
    title: "Founder, GreenWave Solutions",
  },
  {
    quote:
      "Our project was completed ahead of schedule and exceeded expectations. I highly recommend Astha Insight for any tech needs!",
    name: "Sara Mitchell",
    title: "COO, BrightStart Education",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const slideWidthPercent = 65; // width of one slide in percent
  const slideGap = 16; // gap between slide and arrows (pixels)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

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
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-lg shadow-lg p-8 mx-auto"
              style={{ width: `${100 / total}%` }}
            >
              <Quote className="h-10 w-10 text-primary opacity-20 mb-4" />
              <p className="text-gray-600 italic mb-6">“{testimonial.quote}”</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
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
