import { useParams } from 'react-router-dom';

export default function Course() {
  let { id } = useParams();

  return (
    <div>
      <h2>Course: {id}</h2>
    </div>
  );
}
