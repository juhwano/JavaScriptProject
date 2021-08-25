# Project Name
> 숫자 맞추기 게임

<br/>
<br/>

<!-- TABLE OF CONTENTS -->
## 목차

- [1. 프로젝트 요약](#요구-사항)
- [2. 사용 기술](#사용-기술)
- [3. 미리 보기](#미리-보기)
- [4. 로직 분석](#로직-분석)
- [5. 기여 방법](#Contributing)


<br/>
<br/>

<!-- ABOUT THE PROJECT -->

![image](https://user-images.githubusercontent.com/77667889/130807871-b1ea94d4-990c-4dc0-a699-e9c285d2d353.png)

# 요구사항

> 나는 간단하게 숫자 맞추기 게임을 만들고 싶다.
>
> 1과 100 사이의 수 중에서 무작위로 선택되어야 하고, 플레이어는
> 10번의 기회 안에 그 숫자를 맞춰야 한다.
>
> 각 순서마다 숫자를 맞췄는지 틀렸는지 당연히 알려줘야 하고, 틀렸다면 큰지 작은지도 포함해서 말해줘야 한다.
>
> 또한 이전에 써냈던 번호들도 보여줘야 한다.
>
> 게임은 플레이어가 숫자를 맞추던가, 기회를 모두 소진하면 끝나게 된다.
>
> 게임이 끝나면 플레이어에게 다시 게임을 할 것인지 묻게 된다.

<br/>
<br/>



## 사용 기술

* 회면기술:HTML5, CSS3, JavaScript
* 개발도구:Visual Studio Code

<br/>
<br/>

## 미리 보기

![210825](https://user-images.githubusercontent.com/77667889/130807797-51e7bda9-29c0-4ee3-ade2-35ab2a9e056d.gif)

<br/>
<br/>

## 로직 분석

<ol>
  <li>1과 100 사이의 숫자 중 무작위로 추출한다.</li>
  <li>1부터 플레이어의 차례를 기록한다.</li>
  <li>플레이어에게 숫자를 맞출 수 있게 한다.</li>
  <li>숫자를 맞추면 어딘가에 저장하고, 사용자는 이전의 추측한 숫자를 볼 수 있도록 한다.</li>
  <li>그 다음, 숫자가 일치한지 확인한다.</li>
  <li>만약 일치한다면</li>
    <ol>
      <li>축하 메시지를 표시한다.</li>
      <li>더 이상 숫자를 맞출 필요가 없다.</li>
      <li>플에이어에게 다시 게임을 할지 묻는다.</li>
    </ol>
  <li>숫자가 틀렸고, 차례가 남아있다면</li>
    <ol>
      <li>틀렸다고 알린다.</li>
      <li>다른 숫자를 입력할 수 있도록 한다.</li>
      <li>차례가 1 증가한다.</li>
    </ol>
  <li>숫자가 틀렸고, 차례가 없다면</li>
    <ol>
      <li>게임이 종료되었음을 알린다.</li>
      <li>더 이상 숫자를 맞출 필요가 없다.</li>
      <li>플레이어에게 다시 게임을 할지 묻는다.</li>
    </ol>
  <li>게임이 재시작되면, 게임의 구조와 UI는 리셋되며, step1부터 로직이 시작된다.</li>
</ol>



<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/feature name/210824name`)
3. Commit your Changes (`git commit -m 'Add feature name'`)
4. Push to the Branch (`git push origin feat/feature name/210824name`)
5. Open a Pull Request



