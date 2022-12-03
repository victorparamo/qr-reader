import { EventData } from 'pages/Dashboard/Dashboard';

function createData({ name, date, guests, id }: EventData) {
  return { name, date, guests, id };
}

const events = [
  createData({
    name: 'Boda Julio y Vianey',
    date: new Date(2023, 2, 28),
    guests: 150,
    id: 'cdcdkcdcdcmd',
  }),
  createData({
    name: 'Graduacion TEC ISD',
    date: new Date(2022, 12, 20),
    guests: 500,
    id: 'cdcdkcdcdcmd',
  }),
  createData({
    name: 'Boda Carlos y Ana',
    date: new Date(2023, 3, 5),
    guests: 200,
    id: 'cdcdkcdcdcmd',
  }),
];

export default events;
