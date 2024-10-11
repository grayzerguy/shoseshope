import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import Product from "../../../Models/Products";
import ProductModel from "../../../Models/Products";
import ProductCard from "../ProductCard/ProductCard";
import config from "../../../Utils/Config";



export function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>()

    useEffect(() => {
        (async function () {

            //AJAX
            // const response = await axios.get<ProductModel[]>(config.productsUrl);
            const response = await axios.get<ProductModel[]>("https://api.escuelajs.co/api/v1/products");
            // Extract the data from the response
            setProducts(response.data)


        })();
    }, [])
    return (
        <div className="ProductList">


            {products?.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}
