import { createSlice } from "@reduxjs/toolkit";


const searchfetch = createSlice({
    name: 'result',
    initialState:{
        a:''
    },
    reducers: {
      fetchresult: (state, action) => {
          state.a = action.payload;
      }
    }
  });
  
  export const { fetchresult } = searchfetch.actions;
  export default searchfetch.reducer;