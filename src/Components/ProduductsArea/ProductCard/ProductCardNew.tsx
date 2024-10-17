import React from 'react';
import ProductsModelNewList from '../../../Models/ProductsNew';


interface ProductCardProps {
    product: ProductsModelNewList;
}

function ProductCard({ product }: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
            <h3>{product.description}</h3>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>category: {product.category}</p>
            <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.description || "Product image"}
            />
        </div>
    );
}

export default ProductCard;
