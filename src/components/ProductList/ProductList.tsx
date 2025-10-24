import React from 'react';
import './product-list.css';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-list-item">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};
