
import "./cards.css"
import bin from "./imgs/bin.png"
import edit from "./imgs/edit.png"

interface CardsProps {
    list: string[];
    onRemoveItem: (itemToRemove: string) => void;
    onEditItem: (itemToEdit: string) => void;

    
    editingIndex: number | null;
    editedText: string;
    handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    saveEdit: () => void;
    cancelEdit: () => void;
}

const Cards: React.FC<CardsProps> = (props) => {
    return (
        <div className='container'>
            {props.list.map((unit, key) => (
                <h1 className='mainlist' key={key}>
                    {props.editingIndex === key ? ( 
                        
                        <div className="edit-controls">
                            <input
                                type="text"
                                value={props.editedText}
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
                            <li className='lists'>
                                {unit}
                            </li>
                            <button
                                value={unit}
                                onClick={() => props.onEditItem(unit)}
                                style={{ border: "none", cursor: "pointer", marginRight: '5px' }}
                            >
                                <img src={edit} alt="Edit" style={{ width: '20px', height: '20px' }}></img>
                            </button>
                            <button
                                onClick={() => props.onRemoveItem(unit)}
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