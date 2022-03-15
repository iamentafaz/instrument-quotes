import SearchText from "./SearchText";
import InstrumentList from "./InstrumentList";

function InstrumentItem(props) {
    const filteredInstruments = props.instruments.filter(
        item => item.Symbol.toLowerCase().includes('ha')
    );
    console.log(filteredInstruments)
    return(
        <>
            <SearchText />
            <InstrumentList instrumentItems={filteredInstruments} />
        </>
    )
}

export default InstrumentItem;