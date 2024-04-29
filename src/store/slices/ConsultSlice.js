import { createSlice } from '@reduxjs/toolkit'

const consultSlice = createSlice({
    name: 'todos',
    initialState: {
        productName: "",
        howFast: "",
        arranges: "",
        messanger: ""
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
        setMessanger: (state, action) => {
            state.messanger = action.payload
        }
    },
})

export const { setProductName, setHowFast, setArranges } = consultSlice.actions
export default consultSlice.reducer