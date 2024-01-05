import { Button, Container, Table } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useEffect, useState, } from "react";

import { Employee } from "../types/EmployeeTypes";

import { 
    
    deleteEmployeeByIdService,
    
    getEmployeesService 

} from "../services/EmployeeService";

const View = () => {

    const [ employees, setEmployees ] = useState<Employee[]>([]);

    const [ loading, setLoading ] = useState(true);

    const [ isDeleted, setIsDeleted ] = useState(false);

    const handleDelete = (empId: number) => {

        deleteEmployeeByIdService(empId).then(response => {

            console.log(response.data);

            setIsDeleted(prevIsDeleted => !prevIsDeleted);

        });

    }

    useEffect(() => {

        getEmployeesService().then(resposne => {

            setEmployees(resposne.data);

            setLoading(false);

        });

    }, [isDeleted]);
 
    return (

        <section className="my-3">

            <Container>

                <h2 className="fs-3 mb-3" style={{ letterSpacing: "1px" }}>
                    
                    Employees List
                    
                </h2>

                <Table striped bordered hover responsive className="text-center">

                    <thead>

                        <tr>

                            <th>Employee Id</th>

                            <th>Employee First Name</th>

                            <th>Employee Last Name</th>

                            <th>Employee Email</th>
                            
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>{

                        loading ?
                        
                        <tr><td colSpan={5} className="text-center">Loading...</td></tr> :
                    
                        employees.map(employee => <tr key={ employee.id }>

                            <td>{ employee.id }</td>

                            <td>{ employee.firstName }</td>

                            <td>{ employee.lastName }</td>

                            <td>{ employee.email }</td>

                            <td>

                                <Link to={ `/update/${ employee.id }` }>

                                    <Button className="mx-2" variant="primary">
                                        
                                        Update
                                        
                                    </Button>

                                </Link>

                                <Button 
                                
                                    className="mx-2" variant="danger"

                                    onClick={ () => handleDelete(employee?.id || 0) }
                                
                                >Delete</Button>

                            </td>

                        </tr>)
                        
                    }</tbody>
                    
                </Table>

            </Container>

        </section>

    );

}

export default View;
