import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useCartContext } from "../contexts/CartContext";


const ProductDetails = () => {
 
const {id} = useParams()

const {products} = useProductContext();
const { addToCart } = useCartContext();


const product = products.find(item=> item.id === +id)

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image  } = product;

  return (
    <section className="pt-32 pb12 lg:py32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[ mx-auto]">
{title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6 "> $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(product.id, product ) }  className="bg-primary py-4 px-8 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
