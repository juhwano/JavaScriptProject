const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2022';

function countdown() {
  // 목표 날짜
  const newYearsDate = new Date(newYears);
  // 현재 시간
  const currentDate = new Date();
  // 남은 시간 초
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  // 일시분초 계산
  // Math.floor()는 어떤 수보다 크지 않은 최대의 정수를 반환합니다.
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // 구한 시간 삽입
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

}
// 한자리 숫자일 때 0 추가
const formatTime = time => time < 10 ? (`0${time}`) : time;

// 최초 실행
countdown();

// 1초마다 함수 콜
setInterval(countdown, 1000);