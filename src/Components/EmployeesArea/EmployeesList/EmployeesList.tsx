import { useEffect, useState } from "react";
import "./EmployeesList.css";
import EmployeeModel from "../../../Models/Employees";
import axios from "axios";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import config from "../../../Utils/Config";
import { Loading } from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";



export function EmployeesList(): JSX.Element {
    const [employees, setEmployees] = useState<EmployeeModel[]>([])



    useEffect(() => {
        (async function () {

            const response = await axios.get(config.employeesUrl);
            setEmployees(response.data);
        })();
    }, [])

    return (
        <div className="EmployeesList">
            {employees.length === 0 && <Loading />}
            <NavLink to={"/employees/new"}>➕</NavLink>

            {employees.map(e => <EmployeeCard key={e.id} employee={e} />)}
        </div>
    );
}
