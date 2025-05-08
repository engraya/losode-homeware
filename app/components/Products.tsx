"use client";

import React from 'react';
import { Product, products } from '../data/products'; 
import ProductCard from './Homeware/ProductCard';
import Fuse from 'fuse.js';
import { useSearch } from '../contexts/SearchContext';  

const Products: React.FC = () => {
  const { query } = useSearch(); 

  const fuse = new Fuse(products, {
    keys: ['name', 'description'],
    includeScore: true,
    threshold: 0.3,
  });

  const filteredProducts = query
    ? fuse.search(query).map(result => result.item)
    : products;

  return (
    <section className="px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5">
      {filteredProducts.length === 0 ? (
        <div className="col-span-full h-[17rem] flex justify-center items-center text-center text-lg text-gray-500">
            <div className="bg-gray-100 text-gray-900 p-4  rounded-md">
          <strong className='mb-6'>You searched for “{query}”</strong><br />
          <p className="text-2xl font-bold text-gray-900">No products found for "{query}". Please try another search.</p>
        </div>
        </div>
      ) : (
        filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))
      )}
    </section>
  );
};

export default Products;
