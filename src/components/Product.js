import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    const [rating] = useState(4);

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, category, image
    };
    dispatch(addToBasket(product));
  }  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>
        
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className="my-3">{title}</h4>
        <div className="flex">
            {Array(rating).fill().map((_, i) => (
                  <StarIcon className="h-5 text-yellow-400" />     
            ))}
           
    </div>
    <p className="text-xs my-2 line-clamp-2">{description}</p>
    <div className="mb-5">
        <Currency quantity={price} currency='EUR' />
    </div>
    <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product