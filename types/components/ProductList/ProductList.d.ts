import React from 'react';
import './ProductList.css';
export interface Product {
    id: string;
    name: string;
    price: number;
}
export interface ProductListProps {
    products: Product[];
}
declare const ProductList: ({ products }: ProductListProps) => React.JSX.Element;
export default ProductList;
