import { useState, useEffect } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import getEvent, { EventResponse } from 'api/getEvent';

const Event = (): JSX.Element => {
  const [event, setEvent] = useState<EventResponse>({
    name: '',
    guests: [],
    guestsNumber: 0,
    date: new Date(),
    id: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchEvent() {
      const { ...event } = await getEvent();
      setEvent(event);
      setLoading(false);
    }

    fetchEvent();
  }, []);

  return loading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
        <ArrowBackIosNewIcon
          onClick={() => navigate('..')}
          sx={{ mr: 2, cursor: 'pointer' }}
        />
        <Typography variant="h4">{event.name}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre invitado</TableCell>
              <TableCell align="center">Lugares</TableCell>
              <TableCell align="center">Mesa</TableCell>
              {/* <TableCell>Acciones</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {event.guests.map((row) => (
              <TableRow
                key={row.name}
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
  );
};

export default Event;
