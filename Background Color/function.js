const button = document.querySelector('.button')
const body = document.querySelector('body')
const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', 'hotpink', 'lightblue', 'black']

body.style.backgroundColor = '#EBD3B0'

button.addEventListener('click', changeBackground)

function changeBackground() {
  // Math random() 최대값 지정 : *
  // 최대값을 0부터 10으로 설정하려면 10을 곱해줍니다.
  // ex) Math.random() * 10
  
  // psrseInt는 소수점 이하는 출력하지 않는다
  const colorIndex = parseInt(Math.random()*colors.length)
  
  body.style.backgroundColor = colors[colorIndex]
  
}
