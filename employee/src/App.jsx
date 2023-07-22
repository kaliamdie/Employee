
import React from 'react';
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeePage from "./components/EmployeePage";

export default function App() {
  let [employees, setEmployees] = React.useState(data);

  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage employees={employees} addEmployee={addEmployee} />}
        />
        <Route path="/:id" element={<EmployeePage employees={employees} />} />
      </Routes>
    </div>
  );
}

