/* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import Loading from './components/Loading';
import EventHeader from './components/EventHeader';
import { useNavigate } from 'react-router-dom';

import getEvent, { EventResponse } from 'api/getEvent';
import EventTable from './components/EventTable';

const Event = (): JSX.Element => {
  const [dataFromCloud, setDataFromCloud] = useState<EventResponse>({
    name: '',
    guests: [],
    guestsNumber: 0,
    date: new Date(),
    id: '',
  });
  const [tableData, setTableData] = useState<EventResponse>({
    name: '',
    guests: [],
    guestsNumber: 0,
    date: new Date(),
    id: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isDataChanged, setIsDataChanged] = useState<boolean>(false);
  const navigate = useNavigate();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    async function fetchEvent() {
      const { ...event } = await getEvent();
      setDataFromCloud(event);
      setTableData(event);
      setLoading(false);
    }
    fetchEvent();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <EventHeader
        navigate={navigate}
        dataFromCloud={dataFromCloud}
        hiddenFileInput={hiddenFileInput}
        setIsDataChanged={setIsDataChanged}
        setTableData={setTableData}
        tableData={tableData}
        isDataChanged={isDataChanged}
      />
      <EventTable
        tableData={tableData}
        setTableData={setTableData}
      />
    </>
  );
};

export default Event;
