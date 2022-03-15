import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./InstrumentList.css";

function InstrumentList(props) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 550 }} className="table-container">
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Sector</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.instrumentItems.map((row) => (
              <TableRow
                key={row.Symbol}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/quotes/${row.Symbol}`}>{row.Name}</Link>
                </TableCell>
                <TableCell>{row.Symbol}</TableCell>
                <TableCell>{row.Sector}</TableCell>
              </TableRow>
            ))}
            {props.instrumentItems.length === 0 && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default InstrumentList;
