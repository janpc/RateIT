import { useState, useEffect } from 'react';

import { types, attendence_type, speciality_type } from '@/utils/types';
import * as firebase from '@/utils/firebase'

import Dialogue from '@/components/Dialogue'
import Select from '@/components//Select/'
import Input from '@/components//Input'
import { Form, Button, Column, TopButtons, TopButton, Separator } from '@/assets/style'


export default function AddForm({show, close}) {
  const [name, setName] = useState('');
  const [specialityType, setSpecialityType] = useState('');
  const [attendenceType, setAttendenceType] = useState('');
  const [educatorId, setEducatorId] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [typeOfDocument, setTypeOfDocument] = useState("courses");
  const [educators, setEducators] = useState([]);
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if(typeOfDocument === "courses") {
      getEducators()
    }
  }, [typeOfDocument]);

  const setDocument = {
    name: setName,
    type: setType,
    educator: setEducatorId,
    speciality_type: setSpecialityType,
    attendence_type: setAttendenceType,
    price: setPrice
  }

  async function getEducators() {
    let ed = await firebase.get({
      database: 'educators',
      order:{
        by: 'name'
      }
    });

    ed = ed.map(({name, id}) => ({text: name, value: id}))

    setEducators(ed)
  }

  function setEducator () {
    setTypeOfDocument("educators")
    setErrors({})
  }

  function setCourse () {
    setTypeOfDocument("courses")
    setErrors({})
  }

  async function handleSubmit (e) {
    e.preventDefault()

    let data = {}

    data.name = name;
    data.type = type;

    if (typeOfDocument === 'courses') {
      data.speciality_type = specialityType;
      data.attendence_type = attendenceType;
      data.educator = educatorId;
      data.price = price;
    }
  }

  function handleChange (e) {
    const name = e.target.id
    const value = e.target.value
    setDocument[name](value)
  }
  return (
      <>
        <Dialogue show={show} close={close}>
          <TopButtons>
            <TopButton 
              type="button"
              onClick={setCourse}
              selected={typeOfDocument === "courses"}
            >
              Cursos
            </TopButton>
            <Separator />
            <TopButton
              type="button"
              onClick={setEducator}
              selected={typeOfDocument === "educators"}
            >
              Educadores
            </TopButton>
          </TopButtons>
          <Form onSubmit={handleSubmit}>
            <Column>
              <Input 
                type="search"
                placeholder="Buscar..."
                id="search"
                onChange={handleChange}
                error={errors.name}
                label="Buscar:"
              />
              <Select
                name="type"
                id="type"
                options={types[typeOfDocument]}
                label="Tipo:"
                onChange={handleChange}
                error={errors.type}
                />
              {
                typeOfDocument === 'courses' && 
                  <>
                    <Select
                      name="speciality_type"
                      id="speciality_type"
                      options={speciality_type}
                      label="Especialidad:"
                      onChange={handleChange}
                      error={errors.speciality_type}
                    />
                    <Select
                      name="attendence_type"
                      id="attendence_type"
                      options={attendence_type}
                      label="Presencialidad:"
                      onChange={handleChange}
                      error={errors.attendence_type}
                    />

                    <Select
                      name="educator"
                      id="educator"
                      options={educators}
                      label="Educador:"
                      onChange={handleChange}
                      error={errors.educator}
                    />
                  </>
              }
              <Button type="submit">Buscar</Button>
            </Column>
          </Form>
        </Dialogue>
      </>
  );
}