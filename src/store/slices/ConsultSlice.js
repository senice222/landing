import { createSlice } from '@reduxjs/toolkit'

const consultSlice = createSlice({
    name: 'todos',
    initialState: {
        productName: "",
        howFast: "Urgent",
        arranges: "Yes, i am",
        email: ""
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
        setMail: (state, action) => {
            state.email = action.payload
        }
    },
})

export const { setProductName, setHowFast, setArranges, setMail } = consultSlice.actions
export default consultSlice.reducer