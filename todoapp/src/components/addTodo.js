import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/action";

const AddTodo = () => {
    const[text,setText ] = useState('');
    const disptach = useDispatch();
                      
    const handleAddTodo = () => {
        if(text.trim()) {
            disptach(addTodo(text));
            setText('');
        }
    };
    return(
        <div className="space">
            <input className="taskbar" type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo"/>
            
            <button className="add" onClick={handleAddTodo}>Add</button>
        </div>
    )
};
export default AddTodo;