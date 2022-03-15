import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchText(props) {
  const searchFieldHandler = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={searchFieldHandler}
        value={props.searchString}
      />
    </Box>
  );
}
export default SearchText;
