export const serverAddTask = (payload) => {
  return fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverGetTasks = () => {
  return fetch("http://localhost:3000/tasks", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverDeleteTask = ({ id }) => {
  return fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverUpdateTask = ({ id, completed }) => {
  return fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverSaveTask = ({ id, task }) => {
  return fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
