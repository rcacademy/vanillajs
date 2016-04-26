var todos = [];

function addTodo() {

  var newTodo = document.getElementById('newTodo').value;
  todos.push(newTodo);

  console.log(todos);

  document.getElementById('newTodo').value = '';
  displayTodos();
}

function displayTodos() {

  var todoHTML = '';

  for(var i = 0; i < todos.length; i++) {
    todoHTML += '<li><input type="checkbox"> ' + todos[i] + '</li>';
  }

  document.getElementById('todos').innerHTML = todoHTML;

}
document.getElementById('addItem').addEventListener('click', addTodo);
