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
import useAsyncRequest from 'hooks/useAsyncRequest';

export interface EventData {
  Name: string;
  Date: Date;
  GuestsNum: number;
  Id: string;
}

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();

  const { data, isLoading } = useAsyncRequest(getEvents, { eager: true });

  const events = data?.Events || [];

  return isLoading ? (
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
            {events.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: { xs: 'none', md: 'table-cell' } }}
                >
                  {format(new Date(row.Date), 'dd/MM/yyyy')}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                >
                  {row.GuestsNum}
                </TableCell>
                <TableCell align="center" sx={{ width: 70 }}>
                  <Button onClick={() => navigate(`./${row.Id}`)}>
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
