
import Product from "../../../Models/Products";
import "./ProductCard.css";

type ProductCardProp = {
    product: Product;
}
function ProductCard(props: ProductCardProp): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div className="ProductInfo">
                <h2>{props.product.title}</h2>
                <p className="Price">Price: ${props.product.price.toFixed(2)}</p>
                <p className="Description">{props.product.description}</p>
                <div className="CategoryInfo">
                    <p>Category: {props.product.category.name}</p>
                    <img src={props.product.category.image} alt={props.product.category.name} className="CategoryImage" />
                </div>
                <p className="DateInfo">
                    Created: {new Date(props.product.creationAt).toLocaleDateString()}
                    <br />
                    Updated: {new Date(props.product.updatedAt).toLocaleDateString()}
                </p>
            </div>
            <div className="ProductImages">
                {props.product.images.length > 0 ? (
                    props.product.images.map((image) => (
                        <img key={props.product.id} src={image} alt={`${props.product.title}`} className="ProductImage" />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
        </div>
    );
}
export default ProductCard;