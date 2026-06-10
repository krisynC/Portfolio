import React, { useEffect, useState } from "react";
import "./Manager.css";

const Manager = ({ employees = [], setEmployees }) => {

    const [search, setSearch] = useState("");
    const [newName, setNewName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch employees");
                }

                const data = await response.json();

                setEmployees(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, [setEmployees]);

    const handleAddEmployee = () => {
        if (!newName.trim()) return;

        const newEmployee = {
            id: Date.now(),
            name: newName
        };

        setEmployees((prevList) => [...prevList, newEmployee]);
        setNewName("");
    };

    const handleRemoveEmployee = (id) => {
        setEmployees((prevList) =>
            prevList.filter((emp) => emp.id !== id)
        );
    };

    const handleUpdateEmployee = (emp) => {
        const updatedName = prompt(
            "Enter new employee name",
            emp.name
        );

        if (!updatedName || !updatedName.trim()) return;

        setEmployees((prevList) =>
            prevList.map((item) =>
                item.id === emp.id
                    ? { ...item, name: updatedName }
                    : item
            )
        );
    };

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="manager">

            <input
                type="text"
                placeholder="Search Employee"
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
            />

            <div className="add-section">

                <input
                    type="text"
                    placeholder="Enter Employee Name"
                    value={ newName }
                    onChange={ (e) => setNewName(e.target.value) }
                />

                <button onClick={ handleAddEmployee }>
                    Add Employee
                </button>

            </div>

            <h1>Employee Management System</h1>

            <p>Total Employees: { employees.length }</p>

            { loading && <p>Loading employees...</p> }
            
            { error && <p style={ { color: "red" } }>{ error }</p> }
    
            { filteredEmployees.map((emp) => (

                <div key={ emp.id } className="employee">

                    <span>{ emp.name }</span>

                    <div className="btns">

                        <button onClick={ () => handleRemoveEmployee(emp.id) }>
                            Remove
                        </button>

                        <button onClick={ () => handleUpdateEmployee(emp) }>
                            Update
                        </button>

                    </div>

                </div>
            )) }

        </div>
    );
};

export default Manager;