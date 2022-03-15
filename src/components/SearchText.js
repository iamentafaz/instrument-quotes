import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./SearchText.module.css";

function SearchText(props) {
  const searchFieldHandler = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField
        className={classes.searchContainer}
        id="outlined-basic"
        label="Search for symbols"
        variant="outlined"
        onChange={searchFieldHandler}
        value={props.searchString}
      />
    </Box>
  );
}
export default SearchText;
