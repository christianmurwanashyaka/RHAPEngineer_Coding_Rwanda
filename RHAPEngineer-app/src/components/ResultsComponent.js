import React from "react";

function ResultsComponent({ results }) {
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <p>Name: {result.name}</p>
            <p>Specialty: {result.specialty}</p>
            <p>Address: {result.address}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsComponent;