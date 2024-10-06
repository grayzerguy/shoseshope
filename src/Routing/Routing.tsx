import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/HomeArea/Home/Home";

import { PageNotFound } from "../Components/PageNotFound/PageNotFound";
import { About } from "../Components/AboutArea/About/About";
import { ProductList } from "../Components/ProduductsArea/ProductList/ProductList";

export function Routing(): JSX.Element {
    return (

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/" element={<Home />} /> */}
            {/* redirect */}
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="*" element={<PageNotFound />} />


        </Routes>

    );
}
