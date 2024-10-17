import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { About } from "../../AboutArea/About/About";
import { ProductList } from "../../ProduductsArea/ProductList/ProductList";

import Home from "../../HomeArea/Home/Home";
import { SuccessStories } from "../../AboutArea/SuccessStories/SuccessStories";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { EmployeesList } from "../../EmployeesArea/EmployeesList/EmployeesList";
import { EmployeeDetails } from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import { ProductListNew } from "../../ProduductsArea/ProductList/ProductsListNwe";


export function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/about" element={<About />} />
                <Route path="/successStories" element={<SuccessStories />} />
                <Route path="/employees" element={<EmployeesList />} />
                <Route path="/employees/details/:id" element={<EmployeeDetails />} />
                <Route path="/productsNew" element={<ProductListNew />} />


                {/* <Route path="/" element={<Home />} /> */}
                {/* redirect */}
                <Route path="/" element={<Navigate to='/home' />} />
                <Route path="*" element={<PageNotFound />} />


            </Routes>

        </div>
    );
}
