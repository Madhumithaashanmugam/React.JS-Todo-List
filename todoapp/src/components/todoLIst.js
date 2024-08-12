import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../store/action";

const TodoList = ( ) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return(
        <ul className="listhere">
            {todos.map((todo,index) => (
                <li className="list"  key={index}>{todo}
                <></>
                <button className="remove" onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;                                            