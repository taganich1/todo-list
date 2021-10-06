import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import ToDoForm from "../src/components/TodoForm/TodoForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  deleteTaskRequestAction,
  getTaskRequestAction,
  saveTaskRequestAction,
  updateTaskRequestAction,
} from "./redux/actions/actions";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    color: "aqua",
    fontSize: "26px",
  },
});

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #2d2d2d;
  font-size: 26px;
  color: aqua;
  text-align: center;
`;

const NoTasksComponent = styled.div`
  font-size: 32px;
  color: red;
`;

const EditTaskWrapper = styled.div`
  margin: 0 auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

function App() {
  const classes = useStyles();
  const token = useSelector((state) => state.tasksReducer.token);
  const tasks = useSelector((state) => state.getTasksReducer.tasks);
  const isLoading = useSelector((state) => state.getTasksReducer.isLoading);
  const [editingTask, setEditingTask] = useState(null);
  const [editingInput, setEditingInput] = useState(null);
  const [savingTask, setSavingTask] = useState(false);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        completed: false,
      };
      dispatch(addTaskAction(newItem));
      setTodos([newItem, ...todos]);
      localStorage.setItem("token", "token");
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    console.log(id);
    dispatch(deleteTaskRequestAction({ id }));
  };

  const handleChange = (e) => {
    setEditingInput(e.currentTarget.value);
  };

  const handleToggle = (todo) => {
    setTodos([
      ...todos.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, completed: !todoItem.completed }
          : { ...todoItem }
      ),
    ]);
    dispatch(updateTaskRequestAction({ ...todo, completed: !todo.completed }));
  };

  const editTask = (todo) => {
    setEditingTask(todo.id);
    setEditingInput(todo.task);
  };

  const cancelEditingTask = (todo) => {
    setEditingTask(null);
  };

  const saveTask = (todo) => {
    setTodos([
      ...todos.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, task: editingInput }
          : { ...todoItem }
      ),
    ]);
    dispatch(
      saveTaskRequestAction({
        ...todo,
        task: editingInput,
      })
    );
    setEditingTask(null);
    setSavingTask(true);
    setTimeout(() => {
      setSavingTask(false);
    }, 2000);
  };

  const sortByCompleted = (arr) => {
    arr.sort((prev, next) => prev.completed - next.completed);
  };

  useEffect(() => {
    dispatch(getTaskRequestAction(token));
    setTodos([...tasks]);
  }, [isLoading]);

  return (
    <AppWrapper>
      {savingTask ? (
        <Alert variant="filled" severity="success">
          Task successfully saved
        </Alert>
      ) : (
        <div style={{ height: "49px" }}></div>
      )}
      <div className="todo">
        <header>
          <h1>Tasks: {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask} />
        {todos.length !== 0 ? sortByCompleted(todos) : todos}
        {todos.length === 0 && !isLoading ? (
          <NoTasksComponent>No Tasks Yet ...</NoTasksComponent>
        ) : (
          todos.map((todo) => {
            if (editingTask === todo.id) {
              return (
                <EditTaskWrapper key={todo.id} >
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    type="text"
                    value={editingInput}
                    onChange={(e) => handleChange(e)}
                    style={{
                      fontSize: "40px",
                      color: "aqua",
                      backgroundColor: "#2d2d2d",
                      outline: "none",
                      paddingLeft: "35px",
                      width: "470px",
                    }}
                  />
                  <div>
                    <IconButton aria-label="save" onClick={cancelEditingTask}>
                      <CancelIcon color="error" />
                    </IconButton>
                    <IconButton
                      aria-label="save"
                      onClick={() => saveTask(todo)}
                    >
                      <SaveIcon sx={{ color: "aqua" }} />
                    </IconButton>
                  </div>
                </EditTaskWrapper>
              );
            }
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleToggle={handleToggle}
                removeTask={removeTask}
                editingTask={editingTask}
                todos={todos}
                editTask={editTask}
              />
            );
          })
        )}
      </div>
    </AppWrapper>
  );
}

export default App;
