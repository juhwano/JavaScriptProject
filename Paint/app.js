// html5 요소
const canvas = document.querySelector("#jsCanvas");
// 픽셀컨트롤 2D
const ctx = canvas.getContext("2d");
// 붓색상
const colors = document.querySelectorAll(".jsColor");
// 붓크기
const range = document.querySelector("#jsRange");
// 채우기
const mode = document.querySelector("#jsMode");
// 초기 색상
const INITIAL_COLOR = "#2c2c2c";
// 캔버스 크기
const CANVAS_SIZE = 700;
// 저장 버튼
const saveBtn = document.querySelector("#jsSave");

// 픽셀 사이즈
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
// default 배경색
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// 그리는 선의 색상
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
// 그리는 선의 너비
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
  // 클릭하면 그리기 시작
  painting = true;
}

function stopPainting() {
  painting = false;
}
// 마우스를 움직이는 내내 발생한다. 시작점과 끝점을 이어주는 게 아님
function onMouseMove(event) {
  // offset : 전체 범위 내에서 마우스 위치값, 필요한건 캔버스 내에서의 위치값
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // 클릭하지 않고 움직이면 Path 시작, Path = 선, path의 시작점은 마우스가 있는 곳
    ctx.beginPath();
    // path를 만들면 마우스의 x,y좌표로 path 이동
    ctx.moveTo(x, y);
  } else {
    // path의 전 위치에서 지금 위치까지 선을 만듦
    ctx.lineTo(x, y);
    // 선을 그음(현재의 sub-path를 현재의 stroke style로 획을 그음)
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  // 오버라이드
  ctx.strokeStyle = color;
  // 사각형 색상(채우기 모드)
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerHTML = "채우기";
  } else {
    filling = true;
    mode.innerHTML = "그리기";
  }
}

function handleCanvasClick() {
  if (filling) {
    // 선택된 너비 사각형 채우기(x, y, w, h)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleContextMenu(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  // 마우스 누름
  canvas.addEventListener("mousedown", startPainting);
  // 마우스 손 뗌
  canvas.addEventListener("mouseup", stopPainting);
  // 마우스 떠남
  canvas.addEventListener("mouseleave", stopPainting);
  // 클릭 후 또 클릭
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleContextMenu);
}

colors.forEach((color) => color.addEventListener("click", handleColorClick));

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
