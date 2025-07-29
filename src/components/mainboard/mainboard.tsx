
import React, { useState } from 'react';
import "./mainboard.css"
import Cards from '../cards/cards';

const Mainbord: React.FC = () => {
  const [mission, NewMission] = useState("");
  const [list, NewList] = useState<string[]>([]);
  
  
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 
  const [editedText, setEditedText] = useState<string>(""); 

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    NewMission(e.target.value);
  };

  const Add = () => {
    if (mission.trim() !== "") { 
      NewList((prevList) => [...prevList, mission.trim()]);
      NewMission("");
    } else {
      alert("Please enter a task");
    }
  };

  const onRemove = (itemToRemove: string) => {
    event?.preventDefault()
    
    NewList((list) => list.filter((item) => item !== itemToRemove));
  };

 
  const onEdit = (itemToEdit: string) => {
    event?.preventDefault()
    
    const index = list.indexOf(itemToEdit);
    if (index !== -1) {
      setEditingIndex(index);
      setEditedText(itemToEdit); 
    }
  };

 
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

 
  const saveEdit = () => {
    event?.preventDefault()
    if (editingIndex !== null && editedText.trim() !== "") {
      const updatedList = [...list]; 
      updatedList[editingIndex] = editedText.trim(); 
      NewList(updatedList); // 
      setEditingIndex(null); 
      setEditedText(""); 
    } else if (editedText.trim() === "") {
        alert("The task cannot be left empty!");
    }
  };

  const cancelEdit = () => {
    event?.preventDefault()
    setEditingIndex(null); 
    setEditedText(""); 
  };

  return (
    <form className='mainparent'>
      <div className='mainchild'>
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
          list={list}
          editingIndex={editingIndex} 
          editedText={editedText}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      </div>
    </form>
  );
};

export default Mainbord;