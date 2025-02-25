import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Classic Leather Jacket",
      price: 150,
      image: [
        {
          url: "https://picsum.photos/500/300?random=101",
          altText: "Classic Leather Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Denim Blue Jacket",
      price: 130,
      image: [
        {
          url: "https://picsum.photos/500/300?random=102",
          altText: "Denim Blue Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Hooded Winter Coat",
      price: 180,
      image: [
        {
          url: "https://picsum.photos/500/300?random=103",
          altText: "Hooded Winter Coat",
        },
      ],
    },
    {
      _id: "4",
      name: "Slim Fit Bomber",
      price: 140,
      image: [
        {
          url: "https://picsum.photos/500/300?random=104",
          altText: "Slim Fit Bomber",
        },
      ],
    },
    {
      _id: "5",
      name: "Casual Zip-Up Jacket",
      price: 110,
      image: [
        {
          url: "https://picsum.photos/500/300?random=105",
          altText: "Casual Zip-Up Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Faux Fur Lined Coat",
      price: 200,
      image: [
        {
          url: "https://picsum.photos/500/300?random=106",
          altText: "Faux Fur Lined Coat",
        },
      ],
    },
    {
      _id: "7",
      name: "Vintage Suede Jacket",
      price: 170,
      image: [
        {
          url: "https://picsum.photos/500/300?random=107",
          altText: "Vintage Suede Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Puffer Jacket",
      price: 160,
      image: [
        {
          url: "https://picsum.photos/500/300?random=108",
          altText: "Puffer Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="pb-10 w-full">
      <div className="lg:w-[90%] max-sm:px-4 max-lg:px-6 mx-auto">
        <div className="w-full text-center relative">
          <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
          <p className="text-lg text-gray-600 mx-auto pb-12">
            Discover the latest trends in fashion and redefine your style with
            our newest arrivals.
          </p>
          <div className="absolute right-0 bottom-0 flex space-x-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border ${
                canScrollLeft
                  ? "bg-white text-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              } shadow-md hover:bg-gray-200 transition`}
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border ${
                canScrollRight
                  ? "bg-white text-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              } shadow-md hover:bg-gray-200 transition`}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`overflow-x-scroll flex space-x-6 relative mt-3 scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.image[0]?.url}
                alt={product.image[0].altText || product.name}
                className="w-full h-[400px] object-cover rounded-md"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
