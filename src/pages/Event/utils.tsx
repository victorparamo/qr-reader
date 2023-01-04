/* eslint-disable */
import * as XLSX from 'xlsx/xlsx.mjs';


export const handleFileChange = (e: any, setGuestList: any, setIsDataChanged: any) => {
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
    setGuestList(fileData);
    console.log('Data', fileData);
  };

  reader.readAsBinaryString(file);
  setIsDataChanged(true);
};

export const handleSaveFileChanges = (setIsDataChanged: any) => {
  /* Add Logic for POST request */
  console.log('Mocking POST request...')

  setIsDataChanged(false);
};

export const handleButtonClick = (inputRef: any) => {
  inputRef.current.click();
};