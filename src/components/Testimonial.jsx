import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Srajan Shukla",
    rating: 5,
    time: "3 weeks ago",
    text: "I am very satisfied with the services provided by Ashok Vatika. They offer excellent garden maintenance along with healthy plants and beautiful flowers. The team is professional, punctual, and takes great care of greenery. Their work has significantly improved the overall look and freshness of our garden.",
  },
  {
    name: "Mayank Kumar",
    rating: 5,
    time: "3 weeks ago",
    text: "This nursery offers a wide variety of plants and trees. The quality of plants is excellent and the staff is helpful. You should definitely visit and buy some plants from here 😊👍✨",
  },
  {
    name: "Vivek Ambani",
    rating: 5,
    time: "5 months ago",
    text: "Absolutely fantastic service by Ashokvatika Green Services! The team was professional, knowledgeable, and very detail-oriented. They transformed my garden beautifully and took care of everything.",
  },
  {
    name: "Rohit Verma",
    rating: 5,
    time: "2 months ago",
    text: "Ashok Vatika Green Services did a wonderful job maintaining our garden. The plants are healthy, the lawn looks fresh, and the overall upkeep is excellent.",
  },
  {
    name: "Neha Singh",
    rating: 4,
    time: "1 month ago",
    text: "Very good nursery and garden maintenance service. They provide quality plants and proper guidance for plant care. Overall, a great experience.",
  },
  {
    name: "Amit Patel",
    rating: 5,
    time: "3 months ago",
    text: "Excellent experience with Ashok Vatika Green Services. Their team helped us redesign our garden and suggested the right plants for long-term maintenance. Very impressed with the results.",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pt-20 text-center">
      <h2 className="heading-secondary mb-8">
        What Our Clients Say
      </h2>

      <div className="relative bg-white border rounded-xl p-8 shadow-md">
        {/* ⭐ Stars */}
        <div className="text-yellow-500 mb-4">
          {"⭐".repeat(testimonials[current].rating)}
        </div>

        {/* 📝 Review */}
        <p className="text-gray-600 leading-relaxed mb-6">
          “{testimonials[current].text}”
        </p>

        {/* 👤 Name */}
        <h4 className="font-semibold text-lg">
          {testimonials[current].name}
        </h4>
        <span className="text-sm text-gray-400">
          {testimonials[current].time}
        </span>

        {/* ⬅️➡️ Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200"
        >
          ›
        </button>
      </div>

      {/* 🔘 Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current
                ? "bg-black"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
