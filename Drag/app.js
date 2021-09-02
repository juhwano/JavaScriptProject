const list = document.querySelector(".list");
// dragstart -> 드래그 시작
// dragover -> 드래그가 element에 올라갔을때
// drop -> 놓았을 때
let picked = null;
let pickedIndex = null;
list.addEventListener("dragstart", (e) => {
  const obj = e.target;
  // 대상에 대한 정보는 target에 들어있음
  // 땡긴 element
  picked = obj;
  // index 구하기
  // html콜렉션이 배열이긴한데 갖고오려면 전개 연산자 사용
  pickedIndex = [...obj.parentNode.children].indexOf(obj);
});
list.addEventListener("dragover", (e) => {
  // dragover가 실행중이라 drop이 찍히지 않음. 막아줘야함
  e.preventDefault();
  // console.log(e)
});
list.addEventListener("drop", (e) => {
  // 당한 elemnet
  const obj = e.target;
  const index = [...obj.parentNode.children].indexOf(obj);

  // 뒤에 있다면
  index > pickedIndex ? obj.after(picked) : obj.before(picked);
});
