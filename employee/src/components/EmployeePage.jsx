import React from 'react';
import EmployeeInfo from './EmployeeInfo';
import Header from './Header';
import Employee from './Employee';
import { useParams, Link } from 'react-router-dom';

export default function EmployeePage({ employees }) {
  const HEADER = "Employee";
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id); 

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <section className="employee-page">
    
      <Link to="/">
        <Header hasButton={true} header={HEADER}></Header>
      </Link>
      <Employee className="large" employee={employee} />
      <EmployeeInfo employee={employee} />
    </section>
  );
}
