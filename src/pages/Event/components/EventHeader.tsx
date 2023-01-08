/* eslint-disable */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { handleFileChange, handleSaveFileChanges, handleButtonClick } from '../utils';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';

const EventHeader = (props: any): JSX.Element => {
  const { navigate, dataFromCloud, hiddenFileInput, setIsDataChanged, setTableData, tableData, isDataChanged } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <ArrowBackIosNewIcon
        onClick={() => navigate('..')}
        sx={{ mr: 2, cursor: 'pointer' }}
      />
      <Typography variant="h4">{dataFromCloud.name}</Typography>
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
          onChange={(e) => handleFileChange(e, tableData, setTableData, setIsDataChanged)}
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
          onClick={() => { handleSaveFileChanges(tableData, setIsDataChanged) }}
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
