// 데이터 저장을 위한 변수 추가
// 1과 100사이의 임의의 수 지정
let randomNumber = Math.floor(Math.random() * 100) + 1;

// HTML에서 결과 문장을 저장+추가
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

// 입력과 버튼을 받고, 추측된 값을 나중에 받도록
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

// 추측 갯수
let guessCount =1;
// 리셋 버튼
let resetButton;

// 로직
function checkGuess(){
  // 유저 입력값을 변수로 지정
  let userGuess = Number(guessField.value);

  // 조건식 : 현재 플레이어의 게임이 처음인지 아닌지
  if(guessCount === 1){
    guesses.textContent = '이전 추측 숫자 : ';
  }
  // 추측한 수끼리 간격을 두고 보여줌
  guesses.textContent += userGuess + ' ';

  // 조건식 : 랜덤 숫자와 사용자 추측값이 같은지
  if (userGuess === randomNumber){
    lastResult.textContent = '축하합니다! 정답입니다.!';
    lastResult.style.color = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = '!!!게임 오버!!!';
    setGameOver();
  }else{
    lastResult.textContent = '오답!';
    lastResult.style.color = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = '입력 숫자보다 위입니다.';
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = '입력 숫자보다 아래입니다.';
    }
  }

  // 차례 +1, 입력필드 공란, 커서 위치시키기
  guessCount++;
  guessField.value ='';
  guessField.focus();

}

// addEventListener()안에는 함수의 괄호가 필요없다
guessSubmit.addEventListener('click', checkGuess);

// 10번이상 틀릴 시 게임종료
function setGameOver(){
  // 버튼 작동 중지
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // 새로운 button 엘리먼트 생성 후, HTML 아래쪽에 위치
  resetButton = document.createElement('button');
  resetButton.textContent = '다시 시작';
  document.body.appendChild(resetButton);
  // 이벤트 리스너 지정
  resetButton.addEventListener('click', resetGame);
}

// 다시 시작
function resetGame(){
  // guessCoutn 변수를 1로 한다.
  guessCount = 1;

  // 표시된 정보를 모두 초기화
  // <div class='resultParas'> 안의 모든 문장들의 배열을 변수로 만들고 배열 원소에 접근하여 내용 제거
  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  // 리셋 버튼 제거
  resetButton.parentNode.removeChild(resetButton);

  // 텍스트 입력하는 곳을 비워놓고 커서를 위치시킨다
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  // 배경색 제거
  lastResult.style.backgroundcolor = 'white';

  // 임의의 수 새로 지정
  randomNumber = Math.floor(Math.random()* 100) + 1;

}