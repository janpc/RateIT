import { EducatorContainer, EducatorName, EducatorImage, EducatorType } from './styles'
import { types, transformTypesToObject } from '@/utils/types'

const educatorTypes = transformTypesToObject(types.educators)

export default function CourseEducator({ educator }) {
  const { name, image, type, id} = educator
  return (
    <EducatorContainer to={`/educator/${id}`}>
      <EducatorImage src={image} alt={name} loading="lazy" />
      <EducatorName>{name}</EducatorName>
      <EducatorType>{educatorTypes[type]}</EducatorType>
    </EducatorContainer>
  )

}