export function listTodos() {
  return fetch("/todos")
    .then((res) => res.json())
    .then((data) => data.todos);
}

export function createTodo(message) {
  return fetch("/todos", {
    method: "POST",
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => data.todo);
}

export function deleteTodo(id) {
  return fetch("/todos/" + id, { method: "DELETE" });
}
