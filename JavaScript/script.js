function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    var todoText = todoInput.value;
  
    if (todoText.trim() === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
  
    var tickSymbol = document.createElement("span");
    tickSymbol.textContent = "✓";
    tickSymbol.classList.add("tickSymbol");
    li.appendChild(tickSymbol);
  
    var taskText = document.createElement("span");
    taskText.textContent = todoText;
    li.appendChild(taskText);
  
    var deleteButton = document.createElement("button");
    deleteButton.src = "delete.png";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function() {
      todoList.removeChild(li);
    });
    li.appendChild(deleteButton);
  
    todoList.appendChild(li);
  
    todoInput.value = "";
  }
  

  var todoInput = document.getElementById("todoInput");
  todoInput.addEventListener("keypress", function(event) {
   if (event.key === "Enter") 
   {
     addTodo();
   }
 });