import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { About } from "../../AboutArea/About/About";
import { ProductList } from "../../ProduductsArea/ProductList/ProductList";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import Home from "../../HomeArea/Home/Home";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/about" element={<About />} />

                {/* <Route path="/" element={<Home />} /> */}
                {/* redirect */}
                <Route path="/" element={<Navigate to='/home' />} />
                <Route path="*" element={<PageNotFound />} />


            </Routes>

        </div>
    );
}
