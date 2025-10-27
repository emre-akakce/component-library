import React, { useEffect } from 'react';
import './ProductList.css';
export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  useEffect(() => {
    console.log('ProductList mounted or updated');
  }, [products]);
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

export default ProductList;
