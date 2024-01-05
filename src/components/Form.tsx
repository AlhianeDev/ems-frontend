import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useInput } from "../hooks/useInput";

import { 
    
    createEmployeeService,
    
    getEmployeeByIdService,
    
    updateEmployeeByIdService

} from "../services/EmployeeService";

import { ErrorType } from "../types/EmployeeTypes";

type FormProps = {

    type: "add" | "update";

    empId?: number;

}

const Form = ({ type, empId }: FormProps) => {

    const [firstName, bindFirstName, resetFirstName] = useInput();

    const [lastName, bindLastName, resetLastName] = useInput();

    const [email, bindEmail, resetEmail] = useInput();

    const [error, setError] = useState<ErrorType>({} as ErrorType);

    const navigate = useNavigate();

    const handler = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const employee = {firstName, lastName, email};

        if (type === "add") {

            createEmployeeService(employee).then(() => {

                navigate("/");

                resetFirstName();

                resetLastName();

                resetEmail();

            }).catch(error => {

                setError(error.response.data);

            });

        } else if (type === "update") {

            updateEmployeeByIdService(empId || 0, employee).then(() => {

                navigate("/");
          
                resetFirstName();
          
                resetLastName();
                
                resetEmail();
          
          
              }).catch(error => {
          
                setError(error.response.data);
          
            });

        }

    }

    useEffect(() => {

        if (type === "update") {

            getEmployeeByIdService(empId || 0).then(response => {
        
                resetFirstName(response.data.firstName);
            
                resetLastName(response.data.lastName);
            
                resetEmail(response.data.email);
        
            });

        }
    
    }, []);

    return (

        <form onSubmit={ handler } noValidate>

            <div className="mb-3">

                <label 
                
                    htmlFor="exampleInputFname"
                    
                    className="form-label"
                
                >Employee First Name</label>
                
                <input
                
                    type="text" 
                    
                    className="form-control" 
                    
                    id="exampleInputFname" 
                    
                    aria-describedby="fnameHelp"

                    { ...bindFirstName }
                
                />

                <div
                
                    id="fnameHelp" 
                    
                    className="form-text"

                    style={{ color: "red" }}
                
                >{ error.firstName }</div>
            
            </div>

            <div className="mb-3">

                <label 
                
                    htmlFor="exampleInputLname"
                    
                    className="form-label"
                
                >Employee Last Name</label>
                
                <input
                
                    type="text" 
                    
                    className="form-control" 
                    
                    id="exampleInputLname" 
                    
                    aria-describedby="lnameHelp"

                    { ...bindLastName }
                
                />

                <div
                
                    id="lnameHelp" 
                    
                    className="form-text"

                    style={{ color: "red" }}
            
                >{ error.lastName }</div>
            
            </div>

            <div className="mb-3">

                <label 
                
                    htmlFor="exampleInputEmail1"
                    
                    className="form-label"
                
                >Employee Email</label>
                
                <input
                
                    type="email" 
                    
                    className="form-control" 
                    
                    id="exampleInputEmail1" 
                    
                    aria-describedby="emailHelp"

                    { ...bindEmail }
                
                />
            
                <div
                    
                    id="emailHelp" 
                    
                    className="form-text"

                    style={{ color: "red" }}
            
                >{ error.email ? error.email : error.sqlError }</div>

            </div>
            
            <button type="submit" className="btn btn-primary">
                
                { type === "add" ? "Add Employee" : "Update Employee" }
                
            </button>

        </form>

    );

}

export default Form
