import { EventData } from 'pages/Dashboard/Dashboard';

function createData({ name, date, guests }: EventData) {
  return { name, date, guests };
}

const events = [
  createData({
    name: 'Boda Julio y Vianey',
    date: new Date(2023, 2, 28),
    guests: 150,
  }),
  createData({
    name: 'Graduacion TEC ISD',
    date: new Date(2022, 12, 20),
    guests: 500,
  }),
  createData({
    name: 'Boda Carlos y Ana',
    date: new Date(2023, 3, 5),
    guests: 200,
  }),
];

export default events;
