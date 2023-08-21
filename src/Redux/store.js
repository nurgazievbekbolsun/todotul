import { configureStore } from "@reduxjs/toolkit";
import Todoreduser from "./Reduser/todoSlice"

export const store = configureStore({
    reducer: {
        todo: Todoreduser,
    }
})