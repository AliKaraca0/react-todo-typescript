import React, { useState } from 'react';
import "./mainboard.css"
import Cards from '../cards/cards';
import { useDispatch,useSelector } from 'react-redux';
import { addTask,removeTask,edit,save,handleEdit,cancel,toggle,changemod} from '../../store/tasks';
import type { RootState } from "../../store/store";
import sun from "../../sun.svg";
import moon from "../../moon.svg";











 const Mainboard: React.FC = () => {
  const dispatch = useDispatch(); 
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [mission, setNewMission] = useState("");

  
    const editingTaskId = useSelector((state: RootState) => state.tasks.editingTaskId);
    const editedTaskText = useSelector((state: RootState) => state.tasks.editedTaskText);
    const darkMode =useSelector((state: RootState) => state.tasks.isDarkMode);
  

  const changemode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(changemod(darkMode))

  };

 
  


  

  

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMission(e.target.value);
  };

  const Add = () => {
    if (mission.trim() !== "") {
     
      dispatch(addTask(mission.trim()));
      setNewMission("");
    
    } else {
      alert("Please enter a task"); 
    }
  };


  const onRemove = (idToRemove: string) => {
    event?.preventDefault();
    dispatch(removeTask(idToRemove));
  
  };

  
  const onEdit = (idToEdit: string) => {
    event?.preventDefault();
    dispatch(edit(idToEdit))
    
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleEdit(e.target.value));
    
  };

  const saveEdit = () => {
    event?.preventDefault();
    if (editingTaskId && editedTaskText.trim() !== "") {
     
    
     dispatch(save(editedTaskText))
     
   
    } else alert("Input Empty")
    
  };

  const cancelEdit = () => {
    dispatch(cancel())
    
  
  };


  const toggleCompletion = (idToToggle: string) => {
                dispatch(toggle(idToToggle))
  };

  return (

    
      
    <form className={darkMode ? "mainparent dark" : "mainparent light"}>
      <button onClick={changemode}>
  <img src={darkMode ? sun : moon} alt="Theme Icon" width={24} height={24} />
</button>
      <div  className={darkMode ?  "mainchild darkc": "mainchild lightc"
      }>
        <h1>To-Do-List</h1>

        <div className='input-button-wrapper'>
          <input
            className='input'
            onChange={change}
            value={mission}
            placeholder='Add Your Task'
          />

          <button
            type='button'
            onClick={Add}
            className='button'
          >
            Add
          </button>
        </div>

        <Cards
          onEditItem={onEdit}
          onRemoveItem={onRemove}
          list={tasks} 
          
          
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          onToggleCompletion={toggleCompletion} 
        />
      </div>
    </form>
   
  );
};

export default Mainboard;