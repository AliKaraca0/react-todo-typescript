import "./cards.css";
import bin from "./imgs/bin.png";
import edits from "./imgs/edit.png";
import type { RootState } from '../../store/store'; 
import { useSelector } from "react-redux";
// yolunu kendi proje yapına göre düzenle







// Görev nesnesi interface'ini buraya da import ediyoruz veya kopyalıyoruz

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface CardsProps {
  list: Task[]; // list prop'unu Task dizisi olarak güncelliyoruz
  onRemoveItem: (idToRemove: string) => void; // ID'ye göre kaldırma
  onEditItem: (idToEdit: string) => void; // ID'ye göre düzenleme başlatma
  onToggleCompletion: (idToToggle: string) => void; // Yeni prop


  handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

const Cards: React.FC<CardsProps> = (props) => {
  
  const editingTaskId = useSelector((state: RootState) => state.tasks.editingTaskId);
  const editedText = useSelector((state: RootState) => state.tasks.editedTaskText);


 
  return (
    
    <div className='container'>
      {props.list.map((task) => ( 
        
        <h1 className='mainlist' key={task.id}> 
         
          {editingTaskId === task.id? ( 
            <div className="edit-controls">
              <input
                type="text"
                value={editedText}
                onChange={props.handleEditChange}
                className="edit-input"
              />
              <button
                onClick={props.saveEdit}
                className="edit-save-button"
              >
                Kaydet
              </button>
              <button
                onClick={props.cancelEdit}
                className="edit-cancel-button"
              >
                İptal
              </button>
            </div>
          ) : ( 
            <>
              
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => props.onToggleCompletion(task.id)}
                className="task-checkbox"
              />
              <li 
                className='lists' 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
              >
                {task.text}
              </li>
              
              <button
             
                onClick={() => props.onEditItem(task.id)} 
                style={{ border: "none", cursor: "pointer", marginRight: '5px' }}
              >
                <img src={edits} alt="Edit" style={{ width: '20px', height: '20px' }}></img>
              </button>
              <button
            
                onClick={() => props.onRemoveItem(task.id)}
                style={{ border: "none", cursor: "pointer" }}
              >
                <img src={bin} alt="Delete" style={{ width: '20px', height: '20px' }}></img>
              </button>
            </>
          )}
        </h1>
      ))}
    </div>
  );
};

export default Cards;