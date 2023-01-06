/* eslint-disable */
import { Box } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const EventTable = (props: any): JSX.Element => {
  const { tableData, setTableData } = props;
  const [isNameSorted, setIsNameSorted] = useState<boolean>(true);
  const [isGuestsSorted, setIsGuestsSorted] = useState<boolean>(true);
  const [isGuestTableSorted, setIsGuestTableSorted] = useState<boolean>(true);
  const [filterKey, setFilterKey] = useState<string>("");

  const sortTableByString = (filterString: any, isSorted: boolean, setIsSorted: any) => {
    if (isSorted) {
      const newData = tableData
      const sorted = [...tableData.guests].sort((a: any, b: any) => {
        if (a[filterString].toLowerCase() > b[filterString].toLowerCase()) {
          return 1
        } else {
          return -1
        }
      });
      newData.guests = sorted;
      setTableData(newData);
    }
    else {
      const newData = tableData
      const sorted = [...tableData.guests].sort((a: any, b: any) => {
        if (a[filterString].toLowerCase() < b[filterString].toLowerCase()) {
          return 1
        } else {
          return -1
        }
      });
      newData.guests = sorted;
      setTableData(newData);
    }
    setIsSorted(!isSorted);
  }

  const sortTableByNumber = (filterString: any, isSorted: boolean, setIsSorted: any) => {
    if (isSorted) {
      const newData = tableData
      const sorted = [...tableData.guests].sort((a: any, b: any) => {
        if (a[filterString] > b[filterString]) {
          return 1
        } else {
          return -1
        }
      });
      newData.guests = sorted;
      setTableData(newData);
    }
    else {
      const newData = tableData
      const sorted = [...tableData.guests].sort((a: any, b: any) => {
        if (a[filterString] < b[filterString]) {
          return 1
        } else {
          return -1
        }
      });
      newData.guests = sorted;
      setTableData(newData);
    }
    setIsSorted(!isSorted);
  }

  const sortTable = (sortBy: string) => {
    switch (sortBy) {
      case 'name':
        sortTableByString('name', isNameSorted, setIsNameSorted);
        break;
      case 'guests':
        sortTableByNumber('guests', isGuestsSorted, setIsGuestsSorted);
        break;
      case 'table':
        sortTableByNumber('table', isGuestTableSorted, setIsGuestTableSorted);
        break;
      default:
        break;
    }

  };

  const filterTableData = (tableData: any[]) => {
    console.log('tableData', tableData);
    return tableData.filter((row: any) => {
      return Object.values(row).some(s => ("" + s).toLowerCase().includes(("" + filterKey).toLowerCase()));
    });
  };

  const handleClearClick = () => {
    setFilterKey("");
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <TextField
          id="outlined-basic"
          label="Buscar..."
          variant="outlined"
          size="small"
          value={filterKey}
          sx={{
            mt: 1,
            mb: 1,
            ml: 'auto',
          }}
          onChange={(e) => { setFilterKey(e.target.value) }}
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ visibility: filterKey ? "visible" : "hidden" }}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#3FB5A8' }}>
            <TableRow>
              <TableCell
                onClick={() => sortTable('name')}
                sx={{
                  color: 'white',
                  "&:hover": {
                    cursor: 'pointer'
                  }
                }}
              >
                Nombre invitado
              </TableCell>
              <TableCell
                align="center"
                onClick={() => sortTable('guests')}
                sx={{
                  color: 'white',
                  "&:hover": {
                    cursor: 'pointer'
                  }
                }}
              >
                Lugares
              </TableCell>
              <TableCell
                align="center"
                onClick={() => sortTable('table')}
                sx={{
                  color: 'white',
                  "&:hover": {
                    cursor: 'pointer'
                  }
                }}
              >
                Mesa
              </TableCell>
              {/* <TableCell>Acciones</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterTableData(tableData.guests).map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.guests}</TableCell>
                <TableCell align="center">{row.table}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
};

export default EventTable;
