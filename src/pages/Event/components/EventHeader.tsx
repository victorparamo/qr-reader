/* eslint-disable */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { handleFileChange, handleSaveFileChanges, handleButtonClick } from '../utils';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';

const EventHeader = (props: any): JSX.Element => {
  const { navigate, event, hiddenFileInput, setGuestListFromFile, setIsDataChanged, isDataChanged } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
      <ArrowBackIosNewIcon
        onClick={() => navigate('..')}
        sx={{ mr: 2, cursor: 'pointer' }}
      />
      <Typography variant="h4">{event.name}</Typography>
      <Box sx={{ marginLeft: 'auto' }}>
        <Button
          variant="contained"
          sx={{ color: 'white', mr: 2 }}
          onClick={() => { handleButtonClick(hiddenFileInput) }}
        >
          <AttachFileIcon
            sx={{
              mr: 0.5
            }}
          />
          Subir archivo
        </Button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={(e) => handleFileChange(e, setGuestListFromFile, setIsDataChanged)}
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          sx={{
            color: 'white',
            backgroundColor: 'rgb(43,151,231)',
            "&:hover": {
              backgroundColor: 'rgb(35,123,188)'
            }
          }}
          onClick={() => { handleSaveFileChanges(setIsDataChanged) }}
          disabled={!isDataChanged}
        >
          <SaveIcon
            sx={{
              mr: 1
            }}
          />
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  )
};

export default EventHeader;
