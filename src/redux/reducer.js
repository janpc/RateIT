import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  educators: [],
  listShown: 'courses',
  course: {},
  educator: {}
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    set: (state, { payload }) => {
      const { data, type} = payload
      state[type] = [ ...data ]
    },
    setListShown: (state, { payload }) => {
      state.listShown = payload
    },
    setElement: (state, { payload }) => {
      const { data, type} = payload
      state[type] = { ...data }
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, setListShown, setElement } = slice.actions

export default slice.reducer