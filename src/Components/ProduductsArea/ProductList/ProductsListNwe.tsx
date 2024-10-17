import { useEffect, useState } from "react";
import axios from "axios";
import ProductsModelNewList from "../../../Models/ProductsNew";
import { Loading } from "../../SharedArea/Loading/Loading";
import ProductCardNew from "../ProductCard/ProductCardNew";
import config from "../../../Utils/Config";



export function ProductListNew(): JSX.Element {
    const [productsNew, setProductsNew] = useState<ProductsModelNewList[]>([])

    useEffect(() => {
        (async function () {
            const response = await axios.get<ProductsModelNewList[]>(config.productsUrlNew);
            setProductsNew(response.data)
        })();
    }, [])

    return (
        <div className="ProductList">
            {productsNew.length === 0 && <Loading />}
            {productsNew.map((product) => (
                <ProductCardNew key={product.product_id} product={product} />
            ))}
        </div>
    );
}