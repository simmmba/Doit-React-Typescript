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

<BR /><BR />

### 물리 DOM 객체 이벤트 속성

1. addEventListener

   - 번거로운 방법

2. onclick
   - addEventListener를 개선한 방법

### React Framework 이벤트 속성
