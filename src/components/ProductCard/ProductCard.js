import { NavLink } from "react-router-dom";
import MotionComponent from "../Header/Animation";

const ProductCard = ({ products, filterValue }) => {
  return (
    <>
      {products.map((el) => {
        if (filterValue && el.productCategory !== filterValue) {
          return null;
        }

        return (
          <NavLink
            className="flex p-4"
            key={el.productCode}
            to={`product/${el._id}`}
          >
            <MotionComponent>
              <div className="h-full rounded-lg shadow-lg shadow-blue-300 hover:translate-y-[-8px] hover:duration-500 text-center">
                <img
                  className="w-auto mx-auto rounded-t-md shadow-sm shadow-green-300"
                  src={el.images[0]}
                  alt="product img"
                />
                <div className="p-4">
                  <p className="text-center text-lg font-semibold tracking-wider">
                    {el.productName}
                  </p>
                  <p className="text-center text-xl font-semibold mt-2">
                    &#8377;{el.productPrice}
                  </p>
                  <p className="text-sm md:text-base mt-2">
                    {el.productDescription}
                  </p>
                </div>
              </div>
            </MotionComponent>
          </NavLink>
        );
      })}
    </>
  );
};

export default ProductCard;
