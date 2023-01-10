import * as XLSX from 'xlsx';

export const handleFileChange = (
  e: any,
  setDisplaySaveModal: any,
  setFileData: any
) => {
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

export const handleButtonClick = (inputRef: any) => {
  inputRef.current.click();
};
