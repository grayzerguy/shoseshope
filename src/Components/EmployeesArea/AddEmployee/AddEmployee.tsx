import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";
import { useForm } from "react-hook-form";
import EmployeeModel from "../../../Models/Employees";
import axios from "axios";
import config from "../../../Utils/Config";


export function AddEmployee(): JSX.Element {
    // Add form logic to add new employee here
    const { register, handleSubmit } = useForm<EmployeeModel>()
    const navigate = useNavigate();// Initial

    async function submit(employee: EmployeeModel) {

        // Add the employee to the database
        try {

            const response = await axios.post<EmployeeModel>(config.employeesUrl, employee);
            // const addedEmployee = response.data
            // console.log(addedEmployee);
            // alert("Employee added successfully!");
            // window.location.href = "/employees";//Redirect to employee list page after adding a employee
            navigate('/employees');//employees";//Redirect to employee list page after adding a employee

        }
        catch (err: any) {
            alert("An error occurred while adding the employee." + err.massage);
            return;

        }
    }
    return (
        <div className="AddEmployee Box">

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="First Name" {...register("firstName")} />
                <input type="text" placeholder="last Name" {...register("lastName")} />
                <input type="text" placeholder="Title" {...register("title")} />
                <input type="text" placeholder="City" {...register("city")} />
                <input type="text" placeholder="Country" {...register("country")} />
                <input type="text" placeholder="Birth Date" {...register("birthDate")} />
                <button>Add Employee</button>
            </form>



        </div>
    );
}
