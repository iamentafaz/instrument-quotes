import SearchText from "./SearchText";
import InstrumentList from "./InstrumentList";
import { useState } from "react";
import classes from "./InstrumentItems.module.css";
import { CircularProgress } from "@mui/material";

function InstrumentItems(props) {
  const [search, setSearch] = useState("");
  const searchSymbolHandler = (searchString) => {
    setSearch(searchString);
  };
  const filteredInstruments = props.instruments.filter((item) =>
    item.Symbol.toLowerCase().includes(search)
  );
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.tableContainer}>
          { props.loader && <CircularProgress color="secondary" />}
          {!props.loader && <SearchText onSearch={searchSymbolHandler} searchString={search} />}
          {!props.loader && <InstrumentList instrumentItems={filteredInstruments} />}
        </div>
      </div>
    </>
  );
}

export default InstrumentItems;
