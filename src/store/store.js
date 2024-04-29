import { configureStore } from '@reduxjs/toolkit'
import consultSlice from './slices/ConsultSlice'

export const store = configureStore({
  reducer: {
    consult: consultSlice,
  },
})