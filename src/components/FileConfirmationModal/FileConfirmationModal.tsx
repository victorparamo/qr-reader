import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { convertListToEvent } from './utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 7,
};

const FileConfirmationModal = (props: any): JSX.Element => {
  const {
    displayModal,
    setDisplaySaveModal,
    hiddenFileInput,
    guestList,
    tableData,
    setTableData,
  } = props;
  const handleClose = () => {
    hiddenFileInput.current.value = '';
    setDisplaySaveModal(false);
  };

  return (
    <Modal
      open={displayModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          textAlign="center"
          mb={4}
        >
          ¿Seguro que quieres subir el archivo &#34;
          {'' + hiddenFileInput?.current?.value.replace('C:\\fakepath\\', '')}
          &#34;?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Por favor asegura que el archivo sea correcto. Al momento de guardarlo
          se sobreescribirán todos los datos anteriores.
        </Typography>
        <Box sx={{ display: 'flex', mt: 3, justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              mr: 6,
            }}
            onClick={() => {
              handleClose();
              convertListToEvent(guestList, tableData, setTableData);
            }}
          >
            Confirmar
          </Button>

          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FileConfirmationModal;
