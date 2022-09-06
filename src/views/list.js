import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import AddForm from '@/components/AddForm'

export default function List() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {courses, educators} = useSelector((state) => state)

  return (
    <>
      <div>
        <h2>courses:</h2>
        {courses.map(({name, id}) => <Link key={id} to={`course/${id}`}>{name}</Link>)}
        <h2>educators:</h2>
        {educators.map(({name, id}) => <Link key={id} to={`educator/${id}`}>{name}</Link>)}
      </div>
      <AddForm />
    </>
  );
}