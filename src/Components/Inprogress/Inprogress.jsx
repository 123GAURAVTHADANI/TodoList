import { useContext } from "react";
import { TodoData } from "../../App";

function InProgress() {
  const { theme } = useContext(TodoData);
  console.log(">>", theme);
  return (
    // <div className="card">
    //   <h3>In-Progress</h3>
    //   {todoInprogress.map((item) => {
    //     return <h3>{item}</h3>;
    //   })}
    // </div>
    <h3>Inprogress</h3>
  );
}
export default InProgress;
