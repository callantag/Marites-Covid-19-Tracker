import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, active }) => (
        <tr>
          <td> {country}</td>
          <td>
            <strong>{active}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
