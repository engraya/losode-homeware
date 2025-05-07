import React from 'react'
import ProductCard from './Homeware/ProductCard'
import { cups, cotton, wood, pots } from './assets';
import { StaticImageData } from 'next/image';

// Define the types for a product
interface Product {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

// Example product data
const products: Product[] = [
  {
    name: 'Exercise Equipment',
    description: 'Create Exercises for any subject with the topics you and your students care about.',
    price: '₦74,030',
    image: cups,
  },
  {
    name: 'Yoga Mat',
    description: 'Comfortable and durable yoga mat for all your workout needs.',
    price: '₦5,000',
    image: wood,
  },
  {
    name: 'Running Shoes',
    description: 'High-performance running shoes for all levels of runners.',
    price: '₦25,000',
    image: cotton,
  },
  {
    name: 'Fitness Tracker',
    description: 'Track your workouts, steps, and sleep with this advanced fitness tracker.',
    price: '₦12,500',
    image: pots,
  },
];

const Products: React.FC = () => {
  return (
    <section className="px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5">
      {/* Map over the products array and pass data to ProductCard */}
      {products.map((product, index) => (
        <ProductCard 
          key={index} 
          name={product.name} 
          description={product.description} 
          price={product.price} 
          image={product.image} 
        />
      ))}
    </section>
  );
}

export default Products;
