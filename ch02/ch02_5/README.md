## Event

- 사용자가 화면 UI에서 행위를 발생시키면 (= event) 화면 UI 구현 코드에 알려주는 것

<BR /><BR />

## Event property (이벤트 속성)

- on 으로 시작하는 속성
- 모든 HTML 요소는 EventTarget 타입이 정의하는 속성과 메서드를 포함
- ex) onmouseenter, onmouseover
- 참고 페이지 : developer.mozilla.org/ko/docs/Web/API/Event

<BR /><BR />

## Event type

- type
  - 이벤트 이름
  - 대소문자 구분하지 않음
- isTrusted
  - 이벤트가 웹 브라우저에서 발생하면 true
  - 프로그래밍으로 발생하면 false
- target
  - 이벤트가 처음 발생한 HTML 요소
- currentTarget
  - 이벤트의 현재 대상
  - 이벤트 버블링 중 이벤트가 현재 위치한 객체
- bubbles
  - 이벤트가 DOM을 타고 버블링될지 여부 결정

```
new Event('click', {bubbles: true})
```

<BR /><BR />

## Event Handler (이벤트 처리기)

- 이벤트를 기다리는 callback 함수
  - 이벤트가 발생할 때까지 기다리다가 이벤트가 발생하면 해당 이벤트를 코드 쪽으로 알리는 역할
- EventTarget 제공 메서드 3개 : addEventListener, removeEventListener, dispatchEvent
- 하나의 이벤트에 여러 이벤트 처리기 추가 가능

```
DOM_객체.addEventListener(이벤트*이름: string, 콜백\_함수: (e: Event) => void)

// 번거로운 방법
window.addEventListener('click', (e: Event) => console.log('mouse click event'))
// 개선된 방법, onclick 이벤트 속성 사용
window.onclick = (e: Event) => console.log('mouse click event')

// public 디렉터리 index.html 파일에 <div id="root"> 태그 포함됨
// 번거로운 방법
document.getElementById('root')?.addEventListener('click', (e: Event) => {
const {isTrusted, target, bubbles} = e
console.log('mouse click event', isTrusted, target, bubbles)
})
// 개선된 방법
const rootDiv = document.getElementById('root')
if(rootDiv){
rootDiv.onclick = (e: Event) => console.log('mouse click event')
}
```

#### (참고) ?.

- optional chaining (옵셔널 체이닝) 연산자
- 위의 코드에서 getElementById 메서드 return 값이 null이면 addEventListener 메서드를 호출하지 않음
- 값을 설정하는 구문에서는 사용 불가

<BR />

### 물리 DOM 객체 이벤트 속성

- 모두 소문자로 표기
- onclick
  - addEventListener는 사용 방법이 번거로워, 이를 개선한 방법

<BR />

### React Framework 이벤트 속성

- 소문자로 시작하는 카멜 표기법 사용
- callback 함수의 매개변수 e 타입은 Event가 아닌 React가 제공하는 SyntheticEvent 타입 설정
- onClick, onMouseEnter, ...
- **Event bubbling (이벤트 버블링)**
  - 자식 요소에서 발생한 이벤트가 가까운 부모 요소에서 가장 먼 부모 요소까지 계속 전달되는 현상
  - currentTarget
    - 이벤트 버블링 중 현재 이벤트가 위치한 객체
    - 이벤트의 현재 대상
  - stopPropagation 메서드
    - 이벤트 버블링을 멈출 때 사용
    - Event capturing (이벤트 캡처링)

<BR />

### input 요소 이벤트 처리

- type 속성값에 따라 화면에 나타나는 모습, 사용자 입력을 얻는 방법이 다름
- **onChange**
  - 사용자 입력이 텍스트일 때, change 이벤트 발생
  - type 속성값 별 사용자 입력 내용 얻는 속성값
    - input type 속성값 : 사용자 입력 내용 얻을 수 있는 속성값
    - checkbox, radio : checked
    - text, email. password, range : value
    - file : files
- **value, checked**
  - 사용자가 input에 입력한 값 얻을 때 사용
  - type 설정값
    - <u>text</u> 종류일 때
      - e.target.value
    - <u>checkbox</u> 종류일 때
      - e.target.checked
    - <u>file</u> 종류일 때
      - e.target.files
      - multiple 속성
        - 기본값 false : 파일 1개 선택 가능
        - true : 파일 여러개 동시 선택 가능
      - accept 속성
        - 사용자가 선택할 수 있는 파일 확장자 제한
          - images/\* : 이미지 파일만
          - text/plain : 텍스트 파일만
- **defaultValue, defaultChecked**
  - input에 초기값을 설정할 때 사용

<BR />

#### cf) `<button>`과 `<input type='button'>`의 차이

- 공통점
  - 모두 click 이벤트 발생
- 차이점
  - button 태그 안에 자식 요소를 가질 수 있음 (ex. `<button><span>button</span><button/>`)
  - input 태그 안에는 자식 요소 가질 수 없음 (ex. `<input type="button" value="button" />`)

<BR />

### Drag & Drop 이벤트 처리

- 모든 HTMLElement 상속 요소는 draggable 이라는 boolean 타입 속성 제공
- 종류
  - onDragEnter : 요소를 드롭 대상 위에 올렸을 때
  - onDragStart : 요소를 드래그하기 시작했을 때
  - onDrag : 요소를 드래그할 때
  - onDragOver : 요소가 드롭 대상 위로 지나가는 동안 발생
  - onDragLeave : 드래그하는 요소가 드롭 대상에서 벗어났을 때
  - onDragEnd : 드래그가 끝났을 때
  - onDrop : 요소를 드롭 대상에 드롭했을 때
- e.preventDefault() 메서드
  - 사용자 액션에 따라 이벤트가 발생했을 때 이벤트와 관련된 웹 브라우저의 기본 구현 내용을 실행하지 않게 함
  - 웹브라우저에서 기본으로 Drag & Drop 이벤트가 발생하지 않도록 설계됨
  - <u>Drag & Drop 이벤트 발생을 위해</u> 이벤트 처리기에서 호출해야 함
  - FileDrop 시에도 사용 필요
    - onDragOver, onDrop에 사용
    - 사용하지 않으면 파일을 Drop했을 때 브라우저에서 해당 파일이 열림
