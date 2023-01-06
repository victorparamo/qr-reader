/* eslint-disable */
import * as XLSX from 'xlsx';

const convertListToEvent = (guestList: any, tableData: any, setTableData: any) => {
  const newEvent = { ...tableData };
  const array = [];
  const numGuests = guestList.length;
  for (const guest of guestList) {
    array.push({
      name: guest[0],
      table: guest[1],
      guests: guest[2],
    })
  }
  newEvent.guests = array;
  newEvent.guestsNumber = numGuests;
  setTableData(newEvent)
}

const showFileSubmissionModal = (fileData: any[]) => {
  return false;
}


export const handleFileChange = (e: any, tableData: any, setTableData: any, setIsDataChanged: any) => {
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
    if (showFileSubmissionModal(fileData)) {
      convertListToEvent(fileData, tableData, setTableData);
    }
  };

  reader.readAsBinaryString(file);
  setIsDataChanged(true);
};

export const handleSaveFileChanges = (tableData: any, setIsDataChanged: any) => {
  /* Add Logic for POST request */
  console.log('Mocking POST request...');
  console.log(tableData);
  setIsDataChanged(false);
};

export const handleButtonClick = (inputRef: any) => {
  inputRef.current.click();
};