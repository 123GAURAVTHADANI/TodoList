import { useState } from "react";
import "./App.css";
import Status from "./Components/StatusComponent/Status";

function App() {
  // two states to manage the input field and select dropdown
  const [inputState, setInputState] = useState("");

  const [details, setDetails] = useState({ username: "", password: "" });

  const [todo, setTodo] = useState({
    inprogress: [],
    pending: [],
    completed: [],
  });
  const [selectedValue, setSelectedValue] = useState("inprogress");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInput = (event) => {
    setInputState(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo((prevState) => ({
      ...prevState,
      [selected]: [...prevState["completed"], inputState],
    }));
  };
  // console.log(">>", todo);

  const handleDetailChange = (event) => {
    setDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(">>", details);

  return (
    <>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Input Todo" onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
        <h4>Status:{selectedValue}</h4>
        <select onChange={handleChange}>
          <option value={"inprogress"}>In-Progress</option>
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div> */}

      <input
        type="text"
        placeholder="Username"
        name="username1"
        onChange={handleDetailChange}
      />
      <input
        type="text"
        placeholder="Password"
        name="password1"
        onChange={handleDetailChange}
      />

      {/* <Status todo={todo} /> */}
    </>
  );
}

export default App;
