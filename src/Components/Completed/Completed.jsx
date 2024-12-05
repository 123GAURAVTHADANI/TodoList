import { useContext } from "react";
import { TodoData } from "../../App";

function Completed() {
  let { todo } = useContext(TodoData);
  return (
    <div className="card">
      <h3>Completed!</h3>
      {todo.completed.map((item) => {
        return <h3>{item.name}</h3>;
      })}
    </div>
  );
}
export default Completed;
