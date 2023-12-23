import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionComponent from "../Header/Animation";
import { URL } from "../../Assets/environment/url";
import { useLoaderData } from "react-router-dom";

const Product = (props) => {
  const { product } = useLoaderData().data;

  const [currentImage, setCurrentImage] = useState(0);
  const images = [...product.images];

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <MotionComponent>
      <div className="container flex flex-col md:h-[80vh] mx-auto py-6 justify-center ">
        <div className="flex flex-col md:flex-row shadow-md p-4 rounded-lg shadow-blue-300 bg-zinc-200">
          <div className="md:w-1/2 md:mr-8 p-4">
            <img
              src={images[currentImage]}
              alt={`img ${currentImage + 1}`}
              className="w-auto h-64 mx-auto md:w-2/3 md:h-auto rounded-lg"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={prevImage}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={nextImage}
                className="ml-4 p-2 bg-green-500 text-white rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center tracking-[1px] md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              {product.productName}
            </h1>
            <p className="text-xl mb-4">{product.productDescription}</p>
            <div className="flex flex-col space-y-6 mt-4 ">
              <p className="text-xl font-semibold">
                &#8377; {product.productPrice}
              </p>
              <div className="flex space-x-4 ">
                <button className="px-4 py-2 bg-green-500 text-white rounded-full tracking-[2px] hover:bg-green-800">
                  Add to Cart
                </button>
                <NavLink
                  className="px-4 py-2 bg-green-500 text-white rounded-full tracking-[2px] hover:bg-green-800"
                  to="/checkout"
                  state={product}
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default Product;

export const fetchProductDescription = async ({ params }) => {
  let product;

  await axios({
    method: "GET",
    url: `${URL}products/${params.id}`,
  })
    .then((res) => (product = res))
    .catch((e) => {
      throw new Error();
    });

  return product;
};
