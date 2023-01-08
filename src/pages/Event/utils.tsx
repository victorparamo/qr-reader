/* eslint-disable */
import * as XLSX from 'xlsx';

export const convertListToEvent = (guestList: any, tableData: any, setTableData: any) => {
  const newEvent = { ...tableData };
  const array = [];
  const numGuests = guestList.length; // TODO: CAMBIAR A CALCULATEGUESTS()
  for (const guest of guestList) {
    array.push({
      name: guest[0],
      table: guest[1],
      guests: guest[2],
    })
  }
  newEvent.guests = array;
  newEvent.guestsNumber = numGuests;
  handleSaveFileChanges(newEvent, setTableData);
}

export const handleFileChange = (e: any, setDisplaySaveModal: any, setFileData: any) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const bstr = event?.target?.result;
    const workBook = XLSX.read(bstr, { type: 'binary' });
    const workSheetName = workBook.SheetNames[0];
    const workSheet = workBook.Sheets[workSheetName];

    const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
    //const headers = fileData[0];
    fileData.splice(0, 1);
    setDisplaySaveModal(true);
    setFileData(fileData);
  };

  reader.readAsBinaryString(file);
};

export const handleSaveFileChanges = (newGuestsList: any, setTableData: any) => {
  /* Add Logic for POST request */
  console.log('Mocking POST request...');
  console.log(newGuestsList);
  /* If POST request is successful... */
  setTableData(newGuestsList);
};

export const handleButtonClick = (inputRef: any) => {
  inputRef.current.click();
};