import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTable } from "react-table";
import { COLUMNS } from "./QuoteColumn";
import classes from "./Quotes.module.css";

const Quote = () => {
  const params = useParams();
  const [quotes, setQuotes] = useState([]);
  console.log(params);

  function fetchQuotes() {
    fetch(`https://prototype.sbulltech.com/api/v2/quotes/${params.symbol}`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const parseData = JSON.parse(data);
        const payloadData = parseData.payload[params.symbol];
        setQuotes(() => [...payloadData]);
      });
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  const tableInstance = useTable({
    columns: COLUMNS,
    data: quotes,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Quote;
