import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    color: "aqua",
    fontSize: "30px",
  },
});

const Form = styled.form`
  margin: 0 auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

function ToDoForm({ addTask }) {
  const classes = useStyles();
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        className={classes.field}
        id="standard-basic"
        variant="standard"
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Some task text..."
        sx={{ m: 1, width: "40ch" }}
        InputLabelProps={{ className: classes.field }}
      />
      <IconButton aria-label="delete" type="submit" sx={{ color: "aqua" }}>
        <AddIcon />
      </IconButton>
    </Form>
  );
}

export default ToDoForm;
