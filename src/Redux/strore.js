import { configureStore } from "@reduxjs/toolkit";
import { grocerySlice } from "./slices/grocerySlice";

export const store = configureStore({
	reducer:{
		[grocerySlice.name]:grocerySlice.reducer
	}
})