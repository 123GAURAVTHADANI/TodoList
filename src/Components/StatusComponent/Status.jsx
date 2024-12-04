import Completed from "../Completed/Completed";
import InProgress from "../Inprogress/Inprogress";
import Pending from "../Pending/Pending";

function Status(props) {
  let { todo } = props;
  return (
    <div id="status">
      <InProgress todoInprogress={todo.inprogress} />
      <Pending todoPending={todo.pending} />
      <Completed todoCompleted={todo.completed} />
    </div>
  );
}
export default Status;
