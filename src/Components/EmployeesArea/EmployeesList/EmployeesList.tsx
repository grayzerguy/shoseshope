import { useEffect, useState } from "react";
import "./EmployeesList.css";
import EmployeeModel from "../../../Models/Employees";
import axios from "axios";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import config from "../../../Utils/Config";


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
            <h1>Employees List</h1>
            {employees.map(e =>  <EmployeeCard key={e.id} employee={e} />) }
        </div>
    );
}
