//TODO
//ikryssade flytas till done-diven


//Big container
var bigContainer = document.createElement("div");
bigContainer.setAttribute("class", "bigContainer");
document.body.appendChild(bigContainer);
//Input container
var submitStuff = document.createElement("div");
submitStuff.setAttribute("class", "submitStuff");
bigContainer.appendChild(submitStuff);
//Todo container
var todo = document.createElement("div");
todo.setAttribute("id", "todo");
todo.setAttribute("class", "container");
bigContainer.appendChild(todo);
//Done container
var done = document.createElement('div');
done.setAttribute("id", "done");
done.setAttribute("class", "container");
bigContainer.appendChild(done);

//skapar input och submit för att lägga till saker i todo
var input = document.createElement("input");
input.setAttribute("id", "input");
submitStuff.appendChild(input);

var submit = document.createElement("input");
submit.type = "submit";
submit.value = "Lägg till";
submitStuff.appendChild(submit);

//var complete = document.createElement("input");
//complete.type = "submit";
//complete.value = "Flytta till done";
//submitStuff.appendChild(complete);

//skapa header för todo
var todoHeader = document.createElement("h2");
todo.appendChild(todoHeader);
var doText = document.createTextNode("To do");
todoHeader.appendChild(doText);

//skapa header för done
doneHeader = document.createElement("h2");
done.appendChild(doneHeader);
doneText = document.createTextNode("Done");
doneHeader.appendChild(doneText);

//lista för todo
var todoList = document.createElement("ul");
todoList.setAttribute("class", "list");
todo.appendChild(todoList);
var todoLi;
var checkbox;

//lista för done
var doneList = document.createElement("ul");
doneList.setAttribute("class", "list");
done.appendChild(doneList);

//funktion för att lägga till
var add = function (){
  todoLi = document.createElement("li");
  todoList.appendChild(todoLi);

  //checkbox = document.createElement("input");
  //checkbox.type = "checkbox";
  //checkbox.setAttribute("class", "checkbox");
  //todoLi.appendChild(checkbox);

  var label = document.createElement("label");
  label.setAttribute("class", "my-label");
  todoLi.appendChild(label);

  var doneButton = document.createElement("button");
  doneButton.innerHTML = "Klar";
  todoLi.appendChild(doneButton);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";
  todoLi.appendChild(deleteButton);

  var item = document.createTextNode(input.value);
  label.appendChild(item);
};

//funktion för att lägga till i done
var move = function(){

  /*
  //räkna antalet li

  for (var i = 0; i < todoList.children.length; i++) {
    var isChecked = todoList.children[i].getElementsByClassName("checkbox")[0].checked;
      if (isChecked){
        doneList.appendChild(todoList.children[i]);
        todoList.removeChild(todoList.children[i])
      }
  }
  */
};


//Event listener för att lägga till med klick
submit.addEventListener("click", add);

//Event listener för att flyta till done med klick
//complete.addEventListener("click", move);

todoList.children[0].children[1].addEventListener("click", move);