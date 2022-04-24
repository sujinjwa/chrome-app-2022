const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// toDos의 키 가져옴
const TODOS_KEY = "toDos";

// array 생성
let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
  // toDos를 text로 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDo = toDos DB에 있는 요소 중 하나
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text; // 페이지에 보여지는 값이 object가 아니라 newToDo의 text가 되어야 함
  const button = document.createElement("button");
  button.innerText = `DELETE`;
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  // text를 newToDoObj라는 object로 저장
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // toDos 라는 array에 newToDo 입력
  paintToDo(newToDoObj); // paintToDo에 text인 newToDo 주지 않고, 객체인 newToDoObj 줌
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// savedToDos에 값이 있을 경우(사용자가 todolist에 추가한 게 있을 경우)
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // localStorage에서 발견되는 이전의 toDos 들을 저장
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
