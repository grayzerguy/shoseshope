import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.css";
import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/Employees";
import axios from "axios";
import config from "../../../Utils/Config"

export function EmployeeDetails(): JSX.Element {

    const params = useParams()
    const id = params.id
    // create employee state
    const [employee, setEmployee] = useState<EmployeeModel>();

    // fetch employee data
    useEffect(() => {
        axios.get<EmployeeModel>(config.employeesUrl + id)
            .then(response => setEmployee(response.data))
            .catch(err => alert(err.massage))

    }, [])

    //add navigate hook
    const navigate = useNavigate()
    return (
        <div className="EmployeeDetails">

            {
                employee &&
                <>
                    <h3>Name : {employee.firstName + employee.lastName}</h3>
                    <h3>country : {employee.country}</h3>
                    <h3>city : {employee.city}</h3>
                    <h3>title : {employee.title}</h3>
                    <img src={employee.imageUrl} alt={employee.firstName} />
                    <br />
                    <button onClick={() => navigate(-1)}>Go back</button>
                </>

            }

        </div>
    );
}
