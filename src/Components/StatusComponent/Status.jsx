import Completed from "../Completed/Completed";
import InProgress from "../Inprogress/Inprogress";
import Pending from "../Pending/Pending";

function Status(props) {
  let { todo, selectedValue } = props;
  return (
    <div id="status">
      <InProgress todo={todo} />
      <Pending todo={todo} />
      <Completed todo={todo} />
    </div>
  );
}
export default Status;
