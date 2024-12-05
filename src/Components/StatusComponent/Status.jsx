import Completed from "../Completed/Completed";
import InProgress from "../Inprogress/Inprogress";
import Pending from "../Pending/Pending";

function Status() {
  // const { todo } = useContext(TodoData);
  return (
    <div id="status">
      <InProgress />
      <Pending />
    </div>
  );
}
export default Status;
