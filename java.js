let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        if(todo.complete) {
            todoItem.innerHTML = `
            <span style="text-decoration: line-through;">${todo.text}</span>
            <button onclick="toggleComplete(${index})">Complete Todo</button>
            <button onclick="deleteTodo(${index})">Delete Todo</button>
        `;
        }
        else {
            todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="toggleComplete(${index})">Complete Todo</button>
            <button onclick="deleteTodo(${index})">Delete Todo</button>
        `;
        }
        
        todoList.appendChild(todoItem);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    todos.push({ text: todoInput.value, complete: false });
    todoInput.value = '';
    renderTodos();
}

function toggleComplete(index) {
    todos[index].complete = !todos[index].complete;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});
