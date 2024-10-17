
import Product from "../../../Models/Products";
import { cleanImageString } from "../../../Utils/cleanImageString";
import "./ProductCard.css";

type ProductCardProp = {
    product: Product;
}

function ProductCard({ product }: ProductCardProp): JSX.Element {
    return (

        <div className="ProductCard Box">
            <div className="ProductInfo">
                <h2>{product.title}</h2>
                <p className="Price">Price: ${product.price.toFixed(2)}</p>
                <p className="Description">{product.description}</p>
                <div className="CategoryInfo">
                    <p>Category: {product.category.name}</p>
                    <img src={product.category.image} alt={product.category.name} className="CategoryImage" />
                </div>
                <p className="DateInfo">
                    Created: {new Date(product.creationAt).toLocaleDateString()}
                    <br />
                    Updated: {new Date(product.updatedAt).toLocaleDateString()}
                </p>
            </div>
            <div className="ProductImages">
                {product.images.length > 0 ? (
                    product.images.map((image, index) => (
                        <img key={`${product.id}-${index}`} src={cleanImageString(image)} alt={`${product.title}`} className="ProductImage" />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </div>
    );
}
export default ProductCard;