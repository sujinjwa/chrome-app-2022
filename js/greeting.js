const loginForm = document.querySelector("#login-form"); // id 찾기
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// second step.
function onLoginSubmit(event) {
  event.preventDefault(); // 어떤 event의 기본 행동(ex. submit의 기본행동은 웹 사이트 새로고침) 발생되지 않도록 막음
  const username = loginInput.value; // loginInput의 value(사용자가 박스에 입력하는 값) 를 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 loginInput.value를 "username"이라는 key값으로 value 저장
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm의 classlist에 "hidden" 추가
  // third step.
  paintGreetings(username); // loginInput.value로 저장된 변수인 username을 보냄
}

function paintGreetings(savedUsername) {
  // greeting 문구를 HTML h1의 innerText에 추가
  greeting.innerText = `Hello ${savedUsername}!`;

  // h1의 "hidden" class 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// first step. localStorage로부터 get한 "username"의 value를 savedUsername 변수로 선언
const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 "username"이 없다면
if (savedUsername === null) {
  // loginForm의 "hidden" class 제거
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // localStorage에 저장된 username의 key값인 savedUsername을 보냄
  paintGreetings(savedUsername);
}
