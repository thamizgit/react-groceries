import {FaPlus} from 'react-icons/fa';
import "./App.css";
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    return(
        <form className='additem' onSubmit={handleSubmit}>
            <label className='addItem-label' htmlFor="addItem" >Add Item</label>
            <input autoFocus
                   id="addItem"
                   placeholder="add item"
                   type="text"
                   value={newItem}
                   onChange={(e)=>setNewItem(e.target.value)}
                   required
                   ></input>
            
            <button type="submit" aria-label="add item">
                <FaPlus />
            </button>
        </form>
    )
}
export default AddItem