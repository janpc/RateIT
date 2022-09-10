import { useState, useEffect } from 'react'
import { FaUser, FaStar, FaHouseUser, FaBook } from 'react-icons/fa'

import { attendence_type as attendence_types, speciality_type as speciality_types, transformTypesToObject } from '@/utils/types'

import { CourseContainer, CourseMain, CourseContent, CourseTitle, CourseTopInfo, CoursePrice, CourseInfoRow } from './styles'
import CourseEducator from '@/components/CourseEducator'

const attendenceTypes = transformTypesToObject(attendence_types)
const specialityTypes = transformTypesToObject(speciality_types)

export default function Course({info}) {
  const { name, price, attendence_type, average_rating, educator, speciality_type, total_ratings, id} = info

  const [ renderedPrice, setRenderedPrice ] = useState('')
  const [ isHovered, setIsHovered ] = useState(false)

  useEffect(() => {
    const p = tarnsformPrice(price)
    setRenderedPrice(p)
  }, [price])

  function tarnsformPrice(price) {
    if (price == 0) {
      return 'Gratis!'
    }

    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '€';
  }

  return (
    <CourseContainer isHovered={isHovered}>
      <CourseMain>
        <CourseEducator educator={educator} />
        <CourseContent
          to={`course/${id}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CourseTitle>{name}</CourseTitle>
          <CourseTopInfo>
            <span>{average_rating} <FaStar alt="Valoración"/></span>
            <span>{total_ratings} <FaUser /></span>
          </CourseTopInfo>
          <CourseInfoRow><FaHouseUser />{attendenceTypes[attendence_type]}</CourseInfoRow>
          <CourseInfoRow><FaBook />{specialityTypes[speciality_type]}</CourseInfoRow>
          <CoursePrice>{renderedPrice}</CoursePrice>
        </CourseContent>
      </CourseMain>
    </CourseContainer>
  )

}