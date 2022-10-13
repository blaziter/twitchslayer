import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  golds: 0,
  gps: 0,
  twitch: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addGold: (state) => {
      state.golds += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addGold } = counterSlice.actions

export default counterSlice.reducer