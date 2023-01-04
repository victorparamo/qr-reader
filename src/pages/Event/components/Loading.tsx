/* eslint-disable */
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
};

export default Loading;
