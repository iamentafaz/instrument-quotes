import React, { useCallback, useEffect, useState } from "react";
import InstrumentItems from "./InstrumentItems";

const Instruments = () => {
  const [instruments, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInstrument = useCallback(() => {
    setLoading(true);
    fetch("https://prototype.sbulltech.com/api/v2/instruments")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const jsonData = csvJSON(data);
        setRows(() =>  [...jsonData]);
      }).catch((err) => {

      }).
      finally(() => {
        setLoading(false);
      })
  },[])
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

    return result;
  }
  useEffect(() => {
    fetchInstrument();
  }, [fetchInstrument]);
  return (
    <>
      <InstrumentItems instruments={instruments} loader={loading} />
    </>
  );
};

export default Instruments;
