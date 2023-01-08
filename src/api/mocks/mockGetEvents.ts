import { EventData } from 'pages/Dashboard/types';

function createData({ Name, Date, GuestsNum, Id }: EventData) {
  return { Name, Date, GuestsNum, Id };
}

const events = [
  createData({
    Name: 'Boda Julio y Vianey',
    Date: new Date(2023, 2, 28),
    GuestsNum: 150,
    Id: 'cdcdkcdcdcmd',
  }),
  createData({
    Name: 'Graduacion TEC ISD',
    Date: new Date(2022, 12, 20),
    GuestsNum: 500,
    Id: 'cdcdkcdcdcmd',
  }),
  createData({
    Name: 'Boda Carlos y Ana',
    Date: new Date(2023, 3, 5),
    GuestsNum: 200,
    Id: 'cdcdkcdcdcmd',
  }),
];

export default events;
