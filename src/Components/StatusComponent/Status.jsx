import Completed from "../Completed/Completed";
import InProgress from "../Inprogress/Inprogress";
import Pending from "../Pending/Pending";
import "./Styles/status.css";
function Status() {
  // const { todo } = useContext(TodoData);
  return (
    <div id="status">
      <InProgress />
      {/* <Pending />
      <Completed /> */}
    </div>
  );
}
export default Status;
