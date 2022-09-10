import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  educators: [],
  listShown: 'courses'
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
  },
})

// Action creators are generated for each case reducer function
export const { set, setListShown } = slice.actions

export default slice.reducer