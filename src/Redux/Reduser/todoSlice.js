import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'TODO',
    initialState:{
        todo:[],
    },
    reducers:{
        addTODO(state,action){
            const newTask = {
                id: state.todo.length ? state.todo[state.todo.length -1].id + 1 : 1,
                title: action.payload,
                isDone:false
            }
            state.todo.push(newTask)
        },
        delTODO(state,action){
            state.todo = state.todo.filter((el) => el.id !== action.payload.id)
        },
        checkTodo(state,action){
            state.todo = state.todo.map(el => el.id === action.payload.id ? {...el, isDone: !el.isDone} : el)
        }
    }
})

export const {addTODO,delTODO,checkTodo} = todoSlice.actions
export default todoSlice.reducer