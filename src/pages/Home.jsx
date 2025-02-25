import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=101" }],
  },
  {
    _id: 2,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=102" }],
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=103" }],
  },
  {
    _id: 4,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=104" }],
  },
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=105" }],
  },
  {
    _id: 6,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=106" }],
  },
  {
    _id: 7,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=107" }],
  },
  {
    _id: 8,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/300?random=108" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller Section */}
      <h2 className="text-2xl text-center font-bold ">Best Seller</h2>
      <ProductDetails />
      <div className="w-full lg:w-[90%] mx-auto max-sm:px-4 max-lg:px-10">
        <h2 className="text-3xl text-center font-bold pb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
