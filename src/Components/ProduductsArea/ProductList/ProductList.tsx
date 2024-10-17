import { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import ProductModel from "../../../Models/Products";
import ProductCard from "../ProductCard/ProductCard";
import config from "../../../Utils/Config";
import { Loading } from "../../SharedArea/Loading/Loading";



export function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        (async function () {

            //AJAX
            // const response = await axios.get<ProductModel[]>(config.productsUrl);
            const response = await axios.get<ProductModel[]>(config.productsUrl);

            // Extract the data from the response
            setProducts(response.data)


        })();
    }, [])
    return (
        <div className="ProductList">

            {products.length === 0 && <Loading />}
            {products.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}
