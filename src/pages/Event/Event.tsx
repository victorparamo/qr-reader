import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import getEvent, { EventResponse } from 'api/getEvent';
import EventHeader from 'components/EventHeader';
import EventTable from 'components/EventTable';
import FileConfirmationModal from 'components/FileConfirmationModal';
import Loading from 'components/Loading';

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
  const [fileData, setFileData] = useState<any>();
  const [displaySaveModal, setDisplaySaveModal] = useState<boolean>(false);
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
        setDisplaySaveModal={setDisplaySaveModal}
        setFileData={setFileData}
      />
      <FileConfirmationModal
        displayModal={displaySaveModal}
        setDisplaySaveModal={setDisplaySaveModal}
        hiddenFileInput={hiddenFileInput}
        guestList={fileData}
        tableData={tableData}
        setTableData={setTableData}
      />
      <EventTable tableData={tableData} setTableData={setTableData} />
    </>
  );
};

export default Event;
