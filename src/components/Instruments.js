import React, { useEffect, useState } from "react";
import InstrumentItem from "./InstrumentItem";

const Instruments = () => {
  const [rows, setRows] = useState([]);

  function fetchInstrument() {
    fetch("https://prototype.sbulltech.com/api/v2/instruments")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const jsonData = csvJSON(data);
        setRows((prevState) => {
          return [...jsonData];
        });
      });
  }
  function csvJSON(csv) {
    var lines = csv.split("\n");

    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentLine = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }

      result.push(obj);
    }

    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }
  useEffect(()=> {
      fetchInstrument();
  }, [])
  return (
    <>
      <InstrumentItem instruments={rows} />
    </>
  );
};

export default Instruments;
