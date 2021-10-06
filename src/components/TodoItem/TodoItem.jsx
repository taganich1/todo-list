import "./gg.styles.css";
import styled from "styled-components";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = styled.div`
  margin: 0 auto;
  width: 600px;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TaskText = styled.div`
  max-width: 449px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function ToDo({ todo, handleToggle, removeTask, editTask }) {
  return (
    <TodoItem key={todo.id} className="item-todo">
      <TodoText>
        <Checkbox
          checked={todo.completed ? true : false}
          onClick={() => handleToggle(todo)}
        />
        <TaskText className={todo.completed ? "item-text_strike" : "item-text"}>
          {todo.task}
        </TaskText>
      </TodoText>
      <div>
        <IconButton
          aria-label="edit"
          onClick={() => editTask(todo)}
          color="error"
        >
          <EditIcon sx={{ color: "aqua" }} />
        </IconButton>
        <IconButton
          aria-label="delete"
          className="item-delete"
          onClick={() => removeTask(todo.id)}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </TodoItem>
  );
}

export default ToDo;
