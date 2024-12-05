import { useContext } from "react";
import { TodoData } from "../../App";
import "./Styles/inprogress.css";
import { MdDelete } from "react-icons/md";

function InProgress() {
  const { todo } = useContext(TodoData);
  return (
    <div className="card">
      <h3>In-Progress</h3>
      {todo.inprogress.map((item) => {
        return (
          <div className="item">
            <h4>{item.name}</h4>
            <MdDelete color="blue" size={30} onClick={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}
export default InProgress;
