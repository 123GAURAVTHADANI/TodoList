import { useContext } from "react";
import { TodoData } from "../../App";

function Pending() {
  const { todo } = useContext(TodoData);
  console.log(">>pending", todo);
  return (
    <div className="card">
      <h3>Pending!!</h3>
      {todo.pending.map((item) => {
        return <h3>{item.name}</h3>;
      })}
    </div>
  );
}

export default Pending;
