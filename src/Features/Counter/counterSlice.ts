import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/store'

interface CounterState {
  golds: number,
  gps: number,
  twitch: number,
}

const initialState: CounterState = {
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
    addGps: (state) => {
    
    },
    addTwitch: (state) => {

    },
    removeGolds: (state) => {
      state.golds -= 1
    }
  },
})

export const { addGold, addGps, addTwitch, removeGolds } = counterSlice.actions

export default counterSlice.reducer