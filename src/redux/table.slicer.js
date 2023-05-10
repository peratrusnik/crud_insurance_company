import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

const initialState = {
    policiesItems: localStorage.getItem('policiesItems') ? JSON.parse(localStorage.getItem('policiesItems')) : [],
}

const tableSlice = createSlice({

    name: 'policies',
    initialState,  
    reducers: {
        addPolicy: (state, action) => {           

            let user = { ...action.payload }            
            state.policiesItems?.push(user)
            localStorage.setItem('policiesItems', JSON.stringify(state.policiesItems))
            toast.success('Successfully add new Item')
            
        },
        deletePolicy: (state, action) => {
            let filteredItems = state.policiesItems.filter((item) => item.id !== action.payload.id)            
            state.policiesItems = filteredItems
            localStorage.setItem('policiesItems', JSON.stringify(state.policiesItems))
            toast.error('Successfully removed Item')
        },
    }
})

export const {addPolicy, deletePolicy, searchPolicy} = tableSlice.actions
export default tableSlice.reducer