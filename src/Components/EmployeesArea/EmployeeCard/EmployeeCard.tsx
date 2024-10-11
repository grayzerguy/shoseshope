import EmployeeModel from "../../../Models/Employees";
import "./EmployeeCard.css";

type EmployeeCardProps = {

    employee : EmployeeModel
	
};

export function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard Box"  >
            <div>
                {props.employee.firstName} {props.employee.lastName}
                <br />
                {props.employee.title}
                <br />
                {props.employee.country} {props.employee.city}
                <br />
                {props.employee.birthDate}

            </div>
            <div>
                <img src={props.employee.imageUrl} alt="Employee Image" />
            </div>
			
        </div>
    );
}
