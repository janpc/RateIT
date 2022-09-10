import { FaUser, FaStar } from 'react-icons/fa'

import { EducatorContainer, EducatorName, EducatorImage, EducatorType, EducatorInfo } from './styles'
import { types, transformTypesToObject } from '@/utils/types'

const educatorTypes = transformTypesToObject(types.educators)

export default function Educator({ educator }) {
  const { name, image, type, id, average_rating, total_ratings} = educator
  return (
    <EducatorContainer to={`educator/${id}`}>
      <EducatorImage src={image} alt={name} loading="lazy" />
      <EducatorName>{name}</EducatorName>
      <EducatorInfo>
        <span>{average_rating} <FaStar alt="Valoración"/></span>
        <span>{total_ratings} <FaUser /></span>
      </EducatorInfo>
      <EducatorType>{educatorTypes[type]}</EducatorType>
    </EducatorContainer>
  )

}