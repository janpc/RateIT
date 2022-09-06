import { useParams } from 'react-router-dom';

export default function Educator() {
  let { id } = useParams();

  return (
    <div>
      <h2>Educator: {id}</h2>
    </div>
  );
}