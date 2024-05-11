import { createSlice } from '@reduxjs/toolkit'

const consultSlice = createSlice({
    name: 'todos',
    initialState: {
        productName: "",
        howFast: "Urgent",
        arranges: "Yes, i am",
        messenger: ""
    },
    reducers: {
        setProductName: (state, action) => {
            state.productName = action.payload
        },
        setHowFast: (state, action) => {
            state.howFast = action.payload
        },
        setArranges: (state, action) => {
            state.arranges = action.payload
        },
        setMessenger: (state, action) => {
            state.messenger = action.payload
        }
    },
})

export const { setProductName, setHowFast, setArranges, setMessenger } = consultSlice.actions
export default consultSlice.reducer