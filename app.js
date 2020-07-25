var todoList = document.getElementById("list");
var li;

// This is invoked when the add todo button is clicked
var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

// This is invoked when the remove todo button is clicked
var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var clearAllButton = document.getElementById("clear");
clearAllButton.addEventListener("click", clearAll);

// This function is invoked when the add todo button is clicked
function addItem() {
  // here we take what the user has typed and store it in the variable todoItem
  var input = document.getElementById("input");
  var todoItem = input.value;

  var textNode1 = document.createTextNode(todoItem);

  if (todoItem === "") {
    var h = document.createElement("p");
    var t = document.createTextNode("Please Enter A Todo");
    h.appendChild(t);
    t.className = "visual";
  } else {
    // created li
    li = document.createElement("li");
    // create checkbox input
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    // create label
    var label = document.createElement("label");

    // add these elements on page
    // append label to the todolist
    todoList.appendChild(label);
    // append the value inserted by the user in the label
    label.appendChild(textNode1);

    // append a checkbox to the list
    li.appendChild(checkbox);

    // append the label to the list
    li.appendChild(label);

    todoList.insertBefore(li, todoList.childNodes[0]);
    // li.className = 'visual'
    input.value = "";
  }
  setTimeout(() => {
    li.className = "visual";
  }, 5);
}

// This function is invoked when the remove todo button is clicked
function removeItem() {
  li = todoList.children;
  for (var index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      todoList.removeChild(li[index]);
    }
  }
}

function clearAll() {
  li = todoList.children;
  for (var index = 0; index < li.length; index++) {
    while (li[index]) {
      todoList.removeChild(li[index]);
    }
  }
}
