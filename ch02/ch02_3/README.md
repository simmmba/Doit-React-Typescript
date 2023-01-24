# Component (컴포넌트)

- 화면 UI를 처리하는 클래스
- 2가지 종류
  - Class Component (클래스형 컴포넌트)
  - Functional Component (함수형 컴포넌트, 함수 컴포넌트)
    - React 16.8 버전 이후 React hooks (리액트 훅)을 통해 등장
    - 리액트 팀이 권장
- 2가지 의미

  - 리액트 제공 컴포넌트

    - HTML5 각 태그에 대응하는 컴포넌트
    - 첫 글자 소문자로 시작
    - ex) div, h1

```
const h1 = <h1>Hello world!</h1>

// 리액트가 제공하는 컴포넌트를 React.createElement로 생성할 때, 컴포넌트 타입에 'h1'과 같은 문자열 입력해야함
const h1 = React.createElement('h1', null, 'Hello world!')
```

- - 사용자 정의 컴포넌트
    - React.createEelement 호출이나 JSX문으로 생성하는 Virtual DOM 생성코드를 사용자 컴포넌트 쪽으로 이동해 코드 간결하게 함
    - Typescript 코드와 JSX 구문을 함께 쓸 수 있음
    - 첫 글자 대문자로 시작하는 camel-case notation(카멜 표기법) 사용
    - ex) MyComponent
    - 'property (속성)' 기능 제공
      - 객체지향 프로그래밍의 속성 + Rerendering (재렌더링)
      - 클래스 멤버 변수
      - 객체 타입 변수
      - 값이 수시로 바뀜 : mutable (가변)
        - 값이 변하면 해당 컴포넌트를 다시 렌더링해 수정된 속성값을 화면에 반영
      - 부모 컴포넌트에서 자식 컴포넌트 쪽으로 전달하는 객체 타입의 데이터(정보)
        - 객체지향 프로그래밍에서의 속성 === 클래스의 멤버 변수
          - 값을 저장, 변경
        - \*\* 리액트에서 객체지향 관점 속성은 state (상태)
      - 선택적 요소
      - 속성 설정값
        - string 타입 : '' (작은따옴표)
        - number 타입 : {} (중괄호)
        - 객체 타입 : {{}} (JSX구문, 객체 구문)

```
<Person name='Hong' /> // string 타입
<Person name='Hong' age={13} /> // number 타입
<Person person={{name:'Hong', age:32}} /> // 객체 타입
```

​

## Class Component (클래스형 컴포넌트)

- 반드시 React 패키지가 제공하는 Component 클래스 상속해야함
- Component를 상속한 클래스 컴포넌트는 render 메서드를 포함해야함
  - render 메서드는 null, React.createElement 호출로 얻은 반환값, JSX문 등으로 Virtual DOM 반환해야 함
- 속성 구현
  - type 키워드로 Props라는 이름의 속성 객체 타입 만들어 넘겨주기
  - 컴포넌트 내부에서 this.props 형태로 외부에서 넘어온 속성 사용

```
// App.tsx
import {Component} from 'react'
import ClassComponent from './ClassComponent'

export default class App extends Component {
  render() {
    return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to Google" />
      <ClassComponent href="https://www.naver.com" text="go to Naver" />
    </ul>
    )
  }
}

// ClassComponent.tsx
import {Component} from 'react'

type ClassComponentProps = {
  // 속성 객체 타입
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
```

​

## Functional Component (함수형 컴포넌트, 함수 컴포넌트)

- 상용구 코드가 없어 컴포넌트를 좀 더 간결하게 구현 가능
- return 값으로 Virtual DOM 생성해 전달
- 구문 2가지
  - function 키워드로 만들기
  - => (화살표 기호) 사용해 만들기
    - anonymous function (익명 함수)

```
// Functional Component
// function 키워드 사용
export default function App() {
  return <div>Hello function-keyword component!</div>
}

// Functional Component
// 화살표 => 사용
const App = () => {
  return <div>Hello arrow-function component!</div>
}
export default App
```

​

### +) Typescript에서 import type 구문

- Typescript에서 type은 JavaScript로 컴파일할 때만 필요한 정보
  - 컴파일 후 JavaScript 코드에서는 type 관련 내용이 완전히 제거됨
- Typescript 컴파일할 때만 필요한 타입은 import type 구문으로 구현

```
import type {FC} from 'react' // 화살표 함수 사용시 props 활용을 위해 필요
```
