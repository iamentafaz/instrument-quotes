import SearchText from "./SearchText";
import InstrumentList from "./InstrumentList";
import { useState } from "react";

function InstrumentItem(props) {
  const [search, setSearch] = useState("");
  const searchSymbolHandler = (searchString) => {
    setSearch(searchString);
  };
  const filteredInstruments = props.instruments.filter((item) =>
    item.Symbol.toLowerCase().includes(search)
  );
  return (
    <>
      <SearchText onSearch={searchSymbolHandler} searchString={search} />
      <InstrumentList instrumentItems={filteredInstruments} />
    </>
  );
}

export default InstrumentItem;
