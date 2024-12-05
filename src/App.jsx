import { createContext, useState } from "react";
import "./App.css";
import Status from "./Components/StatusComponent/Status";

// step 1
export const TodoData = createContext("");

function App() {
  // two states to manage the input field and select dropdown
  const [inputState, setInputState] = useState("");

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
      [selectedValue]: [
        ...prevState[selectedValue],
        {
          name: inputState,
          priority: "HIGH",
          createdAt: new Date().getFullYear(),
          description: "Lorem Ipsum!!",
        },
      ],
    }));
  };
  const [theme, setTheme] = useState("dark");
  return (
    <TodoData.Provider value={{ todo, theme }}>
      <div>
        <form onSubmit={handleSubmit} style={{ color: "white" }}>
          <input type="text" placeholder="Input Todo" onChange={handleInput} />
          <button type="submit">Submit</button>
        </form>
        <select onChange={handleChange}>
          <option value={"inprogress"}>In-Progress</option>
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
      <Status />
    </TodoData.Provider>
  );
}

export default App;
