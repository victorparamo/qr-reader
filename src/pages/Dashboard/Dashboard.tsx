import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';

import getEvents from 'api/getEvents';

export interface EventData {
  name: string;
  date: Date;
  guests: number;
  id: string;
}

const Dashboard = (): JSX.Element => {
  const [rows, setRows] = useState<Array<EventData>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchEvents() {
      const { events } = await getEvents();
      setRows(events);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  return loading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Typography variant="h3" gutterBottom>
        Eventos
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre del evento</TableCell>
              <TableCell
                align="center"
                sx={{ display: { xs: 'none', md: 'table-cell' } }}
              >
                Fecha
              </TableCell>
              <TableCell
                align="center"
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              >
                Invitados
              </TableCell>
              {/* <TableCell>Acciones</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: { xs: 'none', md: 'table-cell' } }}
                >
                  {format(row.date, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                >
                  {row.guests}
                </TableCell>
                <TableCell align="center" sx={{ width: 70 }}>
                  <Button
                    onClick={() => navigate(`./${row.id}`)}
                    variant="outlined"
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
