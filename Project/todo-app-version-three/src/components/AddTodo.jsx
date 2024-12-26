import { useState } from "react";
import { MdAddReaction } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            value={todoName}
            onChange={handNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddReaction />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
