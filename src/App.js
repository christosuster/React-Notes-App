import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todoList, setList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modifyFieldDisplay, setModifyFieldDisplay] = useState("none");
  const [updateText, setUpdateText] = useState("");
  const [currentItem, setCurrentItem] = useState({});

  const changeText = (event) => {
    setInputText(event.target.value);
  };

  const addTask = () => {
    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskValue: inputText,
    };
    setList([...todoList, newTask]);
    setInputText("");
    document.getElementById("textField").value = "";
  };

  const deleteItem = (i) => {
    const newList = todoList.filter((item) => {
      return item.id !== i.id;
    });

    setList(newList);
  };

  const modifyItem = (i) => {
    setCurrentItem(i);
    document.getElementById("updateField").value = i.taskValue;
    setModifyFieldDisplay("flex");
    setUpdateText(i.taskValue);
  };

  const getUpdateText = (event) => {
    setUpdateText(event.target.value);
  };

  const saveUpdate = () => {
    todoList.forEach((item) => {
      console.log(currentItem.id);
      console.log(item.id);
      if (currentItem.id == item.id) {
        item.taskValue = updateText;
        console.log(updateText);
      }
    });
    setList([...todoList]);
    setModifyFieldDisplay("none");
    setUpdateText("");
    document.getElementById("updateField").value = "";
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

          <div className="updateInfo" style={{ display: modifyFieldDisplay }}>
            <textarea id="updateField" onChange={getUpdateText}></textarea>
            <button onClick={saveUpdate}>Save</button>
          </div>

          <div className="items">
            {todoList.map((item) => {
              return (
                <div className="listItem">
                  <h3>{item.taskValue} </h3>

                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => deleteItem(item)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <button
                    style={{ backgroundColor: "green" }}
                    onClick={() => modifyItem(item)}
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <footer>A React project by Christos Uster Biswas</footer>
      </div>
    </div>
  );
}

export default App;
