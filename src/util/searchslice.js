import {createSlice} from '@reduxjs/toolkit'

const searchslice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
   
     cacheresult:(state,action)=>{
          return {...state,...action.payload}
        }
    }
})

export const {cacheresult} = searchslice.actions

export default searchslice.reducer