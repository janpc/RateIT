import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getDocument } from '@database';

export default function Educator() {
  const { id } = useParams();

  const [ educator, setEducator ] = useState({});

  useEffect(() => {
    getEducator()
  }, [])

  async function getEducator() {
    const {ok, data} = await getDocument({database: 'educators', id})

    if (ok) {
      setEducator(data)
    }
  }

  return (
    <div>
      <h2>Educator: {id}</h2>
      <span>{JSON.stringify(educator, null, 2)}</span>
    </div>
  );
}