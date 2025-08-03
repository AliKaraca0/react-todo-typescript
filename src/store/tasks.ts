import { createSlice,  type PayloadAction } from "@reduxjs/toolkit";


export interface Task {
  id: string;
  text: string;
  completed: boolean;
  
}



interface TasksState {
  tasks: Task[]; 
  editingTaskId: string | null; 
  editedTaskText: string; 
   isDarkMode: boolean,
}

const initialState: TasksState = {
  tasks: [], 
  editingTaskId: null, 
  editedTaskText: "", 
   isDarkMode: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        text: action.payload.trim(),
        completed: false, 
      };

      state.tasks.push(newTask);
     

    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    handleEdit: (state, action: PayloadAction<string>) => {
      state.editedTaskText = action.payload;
    },

    edit: (state, action) => {
      const taskToEdit = state.tasks.find((task) => task.id === action.payload);

      if (taskToEdit) {
        state.editingTaskId = taskToEdit.id;
        state.editedTaskText = taskToEdit.text;
      }
    },

    save: (state, action) => {
      state.tasks = state.tasks.map((value) => {
        if (value.id == state.editingTaskId) {
          return { ...value, text: action.payload };
        } else {
          return value;
        }
      });

 
      state.editingTaskId = null; 
      state.editedTaskText = "";
    },


    cancel:(state)=>{

        state.editingTaskId = null;
        state.editedTaskText = "";
    },

    toggle:(state,action)=>{

        state.tasks=state.tasks.map((current)=>{

            if(current.id==action.payload){

               return {...current,completed:!current.completed}

            }else return current



        })



    },


   changemod:(state,action)=>{

   

    state.isDarkMode= !action.payload ;

    




   }





  },
});

export const { addTask, removeTask, edit, save, handleEdit ,cancel,toggle,changemod} =
  tasksSlice.actions;

export default tasksSlice.reducer;
