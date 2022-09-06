import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  educators: []
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    set: (state, { payload }) => {
      const { data, type} = payload
      state[type] = [ ...data ]
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, setEducators, incrementByAmount } = slice.actions

export default slice.reducer