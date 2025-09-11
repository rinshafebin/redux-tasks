import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtask, deletetask, edittask } from "./slice/todoSlice";

const App = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const tasks = useSelector(state => state.tasks.tasks); 
  const taskCount = useSelector(state => state.tasks.tasks.length);  

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addtask(input));
      setInput("");
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = () => {
    dispatch(edittask({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Todo List ({taskCount})</h2>  
      
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            {editId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
                <button onClick={() => dispatch(deletetask(task.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
