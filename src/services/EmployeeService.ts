import axios from "axios";

import { Employee } from "../types/EmployeeTypes";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/employees";

export const getEmployeesService = () => 

    axios.get(REST_API_BASE_URL);

export const getEmployeeByIdService = (empId: number) => 

    axios.get(`${REST_API_BASE_URL}/${empId}`);

export const createEmployeeService = (employee: Employee) => 

    axios.post(REST_API_BASE_URL, employee);

export const updateEmployeeByIdService = (empId: number, employee: Employee) => 

    axios.put(`${REST_API_BASE_URL}/${empId}`, employee);

export const deleteEmployeeByIdService = (empId: number) => 

    axios.delete(`${REST_API_BASE_URL}/${empId}`);
