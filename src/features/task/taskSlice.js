import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id: 0,
        title: "mi primer tarea",
        descripcion: "descripcion de mi primer tarea",
        completed: false
      },
      {
        id: 1,
        title: "mi segunda tarea",
        descripcion: "descripcion de mi segunda tarea",
        completed: false
      },
      {
        id: 2,
        title: "mi tercer tarea",
        descripcion: "descripcion de mi tercer tarea",
        completed: false
      },
      {
        id: 3,
        title: "mi cuarta tarea",
        descripcion: "descripcion de mi cuarta tarea",
        completed: true
      },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
          state.push(action.payload)
        },
        deleteTask: (state, action) => {
          const taskDeleted = state.find(task => task.id === action.payload)
          if(taskDeleted){
            state.splice(state.indexOf(taskDeleted), 1)
          }
        },
        editTask: (state, action) => {
          const {id, title, descripcion, completed} = action.payload
          const foundTask = state.find((task) => task.id === id)
          if(foundTask){
            foundTask.title = title
            foundTask.descripcion = descripcion
            foundTask.completed = completed
          }
        }
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer