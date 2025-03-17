import { createSlice } from "@reduxjs/toolkit";

export const grocerySlice = createSlice({
	name:'grocerySlice',
	initialState:{value:''},

	reducers:{
		setvalue:(state,action)=> {
			state.value=action.payload	
		}
	}
})

export const {setvalue}=grocerySlice.actions;