document.addEventListener("DOMContentLoaded", () => {
  // 문서 객체 가져옴
  const input = document.querySelector("#todo");
  const todoList = document.querySelector("#todo-list");
  const addButton = document.querySelector("#add-button");
  // 변수선언
  // removeTodo() 함수에서 DOM을 쉽게 제거하기 위한 변수
  let keyCount = 0;

  // 함수선언
  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일 없나?");
      return;
    }

    const item = document.createElement("div");
    const checkBox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");

    const key = keyCount;
    keyCount += 1;
    item.setAttribute("data-key", key);
    item.appendChild(checkBox);
    item.appendChild(text);
    item.appendChild(button);
    todoList.appendChild(item);

    checkBox.type = "checkbox";
    checkBox.addEventListener("change", (e) => {
      item.style.textDecoration = e.target.checked ? "line-through" : "";
    });

    text.textContent = input.value;

    button.textContent = "제거하기";
    button.addEventListener("click", () => {
      removeTodo(key);
    });

    input.value = "";
  };

  const removeTodo = (key) => {
    const item = document.querySelector(`[data-key="${key}"`);
    todoList.removeChild(item);
  };

  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", (e) => {
    const ENTER = 13;
    if (e.keyCode === ENTER) {
      addTodo();
    }
  });
});
