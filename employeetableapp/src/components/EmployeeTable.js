import React from "react";
import "../App.css";  // Adjust path if needed

const employees = [
  {
    name: "M.Meghana",
    email: "malayanurimeghana.com",
    position: "Software Engineer",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png", // Meta Logo
  },
  {
    name: "M.Tanmai",
    email: "tanmaimalaynrui.com",
    position: "Product Manager",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft Logo
  },
  {
    name: "Durga ",
    email: "Durgapadhuri.com",
    position: "UX Designer",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", // Netflix Logo
  },
  {
    name: "Kavitha",
    email: "KavithaM.com",
    position: "QA Analyst",
    image: "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png", // Apple Logo
  },
];

function EmployeeTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>
                <img src={emp.image} alt="Company Logo" className="employee-image" />
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
