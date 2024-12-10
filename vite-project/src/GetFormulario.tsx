import { useEffect, useState } from 'react';

function FetchEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('/employees');
      const fetchedEmployees = await response.json();
      setEmployees(fetchedEmployees);
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}