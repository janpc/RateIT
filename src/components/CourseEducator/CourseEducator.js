import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { EducatorContainer, EducatorName, EducatorImage, EducatorType } from './styles'
import { types, transformTypesToObject } from '@/utils/types'
import { setElement } from '@/redux/reducer';

const educatorTypes = transformTypesToObject(types.educators)

export default function CourseEducator({ educator }) {
  const { name, image, type, id} = educator

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setEducator() {
    dispatch(setElement({data: educator, type: 'educator'}));
  }

  function go () {
    setEducator();
    navigate(`/educator/${id}`)
  }

  return (
    <EducatorContainer onClick={go}>
      <EducatorImage src={image} alt={name} loading="lazy" />
      <EducatorName>{name}</EducatorName>
      <EducatorType>{educatorTypes[type]}</EducatorType>
    </EducatorContainer>
  )

}