import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
    name:'app',
    initialState: {
        ismenuopen:false,
    },
    reducers:{
        togglemenu:(state)=>{
              state.ismenuopen= !state.ismenuopen
        }
    }
})

export const {togglemenu} = navslice.actions;

export default navslice.reducer;