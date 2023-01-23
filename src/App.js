import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  const changeText = (event) => {
    setInputText(event.target.value);
  };

  const addTask = () => {
    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskValue: inputText,
    };

    setList([...todoList, newTask]);
  };

  const deleteItem = (i) => {
    const newList = todoList.filter((item) => {
      return item.id !== i.id;
    });

    setList(newList);
  };

  return (
    <div className="App">
      <div className="myApp">
        <header>MY NOTES APP</header>
        <div className="inputField">
          <div className="addItem">
            <input type="text" onChange={changeText} id="textField" />
            <button onClick={addTask}> ADD TASK </button>
          </div>
          <div className="items">
            {todoList.map((item) => {
              return (
                <div className="listItem">
                  <h3>{item.taskValue} </h3>
                  <button onClick={() => deleteItem(item)}>X</button>
                </div>
              );
            })}
          </div>
        </div>
        <footer>A React project by Christos</footer>
      </div>
    </div>
  );
}

export default App;
