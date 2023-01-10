export const convertListToEvent = (
  guestList: any,
  tableData: any,
  setTableData: any
) => {
  const newEvent = { ...tableData };
  const array = [];
  const numGuests = guestList.length; // TODO: CAMBIAR A CALCULATEGUESTS()
  for (const guest of guestList) {
    array.push({
      name: guest[0],
      table: guest[1],
      guests: guest[2],
    });
  }
  newEvent.guests = array;
  newEvent.guestsNumber = numGuests;
  handleSaveFileChanges(newEvent, setTableData);
};

const handleSaveFileChanges = (newGuestsList: any, setTableData: any) => {
  /* Add Logic for POST request */
  console.log('Mocking POST request...');
  console.log(newGuestsList);
  /* If POST request is successful... */
  setTableData(newGuestsList);
};
