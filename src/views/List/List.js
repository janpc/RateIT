import { useSelector } from 'react-redux'

import AddForm from '@/components/AddForm';
import Course from '@/components/Course';
import Educator from '@/components/Educator';

import { EducatorsList } from './styles'

export default function List() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {courses, educators, listShown} = useSelector((state) => state)

  return (
    <>
      { listShown === "courses" && <div>
        { courses.map(course => 
            <Course key={course.id} info={course} />
        ) }
      </div>
      }

      { listShown === "educators" && <EducatorsList>
        { educators.map((educator) => <Educator key={educator.id} educator={educator} />) }
      </EducatorsList>
      }

      <AddForm />
    </>
  );
}