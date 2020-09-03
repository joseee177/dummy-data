let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = (array = null) => {
  document.getElementById("todo-list").innerHTML = ""
  if (array === null) {
    array = arrayOfTodos
  }
  for ( let i = 0; i < array.length; i++) {
      console.log(array[i].title)
      let orderedList = document.getElementById("todo-list")
      let listItem = document.createElement("li")
      let text = array[i].title
      let title = document.createTextNode(text)
      listItem.appendChild(title)
      orderedList.appendChild(listItem)
  }
}

const filterTodos = () => {
  let userN = document.getElementById("UserNumber").value;
  console.log(userN)
  console.log(arrayOfTodos)
  const result = arrayOfTodos.filter(user => user.userId == userN)
  console.log(result)
  populateTodos(result)
  
}