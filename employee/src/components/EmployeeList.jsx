
import React from 'react';
import { Link } from 'react-router-dom';
import Employee from './Employee';

function EmployeeList({ employees }) {
  return (
    <div className="emp-list">
      {employees.map((employee) => (
        <Link to={`/${employee.id}`} key={employee.id}>
          <Employee employee={employee} />
        </Link>
      ))}
    </div>
  );
}

export default EmployeeList;
