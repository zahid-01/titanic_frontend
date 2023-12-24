import { useLoaderData, defer, Await } from "react-router-dom";
import { useState } from "react";
import Filter from "./Filter";
import axios from "axios";
import Testimonial from "./Testimonial";
import { URL } from "../../Assets/environment/url";
import ProductCard from "../ProductCard/ProductCard";
import ContactForm from "./Contact";
import MotionComponent from "../Header/Animation";
import NewsletterSection from "./Subscribe";
import HeroSection from "./Hero";

const LandingPage = () => {
  const { product } = useLoaderData();
  const [category, setCategory] = useState();

  const categoryDisplay = (category = "monitors") => {
    setCategory(category);
  };

  return (
    <>
      <HeroSection />
      <Filter filter={categoryDisplay} />
      <MotionComponent>
        <div
          id="loader"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Await resolve={product}>
              {({ products }) => (
                <ProductCard products={products} filterValue={category} />
              )}
            </Await>
          </div>
        </div>
      </MotionComponent>
      <Testimonial />
      <NewsletterSection />
      <ContactForm />
    </>
  );
};

export default LandingPage;

const loadProducts = async () => {
  const products = await axios({
    method: "GET",
    url: `${URL}products`,
  }).catch((e) => {
    throw new Error();
  });

  return products.data;
};

export const fetchProducts = () => {
  return defer({
    product: loadProducts(),
  });
};
