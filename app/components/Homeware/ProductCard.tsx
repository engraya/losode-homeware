import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';
// Define the types for the props
interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
  return (
    <div className="p-4 max-w-lg cursor-pointer shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
      <Image src={image} alt={name} className="shadow rounded-lg overflow-hidden border" />
      <div className="mt-4">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex justify-between mt-5">
          <span className="underline">Buy Now</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
