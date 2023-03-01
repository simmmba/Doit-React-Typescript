## Component Styling(컴포넌트 스타일링)

- 리액트 컴포넌트는 어떤 시점에 HTML 요소로 바뀌므로 컴포넌트 스타일링 또한 CSS를 사용
- 이 때, CSS는 .css 파일에 담겨 <link> 태그의 href 속성에 설정하는 형태

<BR /><BR />

## Bootstrap

- CSS framework
- 공식 홈페이지 getbootstrap.com > Docs > CDN links > CSS 경로 복사
  - https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css
- 프로젝트 public 디렉토리 > index.html 파일 <meta> 태그 다음에 붙어넣기

```
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
  crossorigin="anonymous"
/>
```

<BR /><BR />

## Webpack과 CSS 파일 import

- 리액트 프로젝트 내부적으로 사용하는 웹팩으로 .css 파일을 좀 더 쉽게 사용
- image, CSS, Javascript, Typescript 코드가 혼합된 프로젝트를 서비스하기 좋게 만듦
- Typescript 코드에서 import문 형태로 CSS 파일을 <link> 태그 없이 이용

<BR /><BR />

## CSS 기본 구문

```
선택자 {
    스타일_속성명: 속성값;
}
p {
    color: red;
    font-size: 14px;
    line-height: 20px;
}
```

- **selector(선택자)** 설정
- 선택자 뒤에 중괄호 {}로 감싸기
- **스타일 속성 이름**과 **속성값** 콜론 : 으로 구분
  - 스타일 속성 이름 규칙
    - 소문자로 시작
    - 2개 이상 단어로 된 속성은 snake case(스네이크 표기법) 사용. ex) font-size
  - 스타일 속성값 규칙
    - 대부분 작은따옴표 없이 사용
    - 속성값이 여러 단어일 때 작은따옴표 사용. ex) 'times New Roman'
    - 속성값이 여러 개면 쉼표 , 로 값 구분
- 마지막 세미콜론 ; 으로 스타일 속성값 설정 끝났음 알림

<BR /><BR />

## Selector(선택자)

- CSS selector(선택자)는 CSS 규칙을 적용할 HTML 요소 정의
- **<u>Universal Selector (전체 선택자, \*)</u>**
  - HTML 문서 모든 태그 한꺼번에 선택하는 용도

```
* {
    box-sizing: border-box;
}
```

- **<u>Type Selector (유형 선택자)</u>**
  - HTML 태그 이름을 사용하는 선택자
  - HTML 문서의 모든 선언한 태그 한꺼번에 선택

```
h1, h2 {
    font-family: Roboto, 'times New Roman', san-serif;
}
```

- **<u>Class Selector (클래스 선택자, .클래스명)</u>**
  - HTML 문서 태그 중 class 속성값이 지정한 클래스 이름과 같은 태그를 한꺼번에 선택

```
.wrapper {
    background-color: blue;
}

<div class='wrapper' />
```

<BR /><BR />

## @import 규칙으로 icon 사용

- **at rules(앳 규칙, @)**
  - @으로 시작하는 구문. ex) @import, @media
  - @import 규칙
    - .css 파일에서 다른 .css 파일 사용할 때 적용
    - `<link rel='stylesheet' href>` 대체

```
// @import로 구글 머티리얼 아이콘 세트 사용 (src/index.css 파일에 작성)
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.material-icons {
  font-family: 'Material Icons';
  display: inline-block;
}

// .tsx 파일에서 사용
// font.google.com/icons 페이지에서 아이콘 이름 확인
// 아이콘 이름이 여러 단어인 경우, 소문자_소문자 형태로 변환해 사용
export default function Icon() {
  return (
    <div>
      <h3>Icon</h3>
      <span className="material-icons">home</span>
      <span className="material-icons">check_circle_outline</span>
    </div>
  )
}
```

<BR /><BR />

## style 속성 사용한 inline styling

- React 컴포넌트에서 style 속성 설정 값은 객체 === 스타일 객체

```
<div style={{width: '100px', height: '100px', backgroudColor: 'blue'}} />
```

<BR /><BR />

## Node.js 패키지 방식으로 icon 사용

- @import 방식은 네트워크 속도에 영향 받음
  - 단점 해결을 위해 Node.js 패키지 형태로 구현된 CSS 프레임워크 내장해 배포
- @import 규칙은 web safe font(웹 안전 폰트)를 사용해야 함
  - desktop, mobile 등 모든 장치에서 동작하는 모든 브라우저에 적용할 수 있는 글꼴
  - 사용자 컴퓨터에 설치되지 않아도 웹 페이지에 올바르게 표시되는 글꼴
  - **fontsource**(fontsource.org)를 통해 오픈소스 웹 안전 글꼴을 패키지 형태로 설치 가능

```
npm i @fontsource/스네이크-표기법-글꼴명
npm i @fontsource/material-icons

// src/index.tsx에서 패키지 import
import '@fontsource/material-icons'
```

<BR /><BR />

## Icon 사용자 component 구현

- Icon 사용을 간결하고 style 속성을 활용해 inline styling 가능하도록 함

<BR /><BR />

### 참고

#### className, htmlFor

- JSX문은 React.createElement 함수 호출 코드로 전환
- 전환 과정에서 Javascript, Typescript 키워드인 class, for가 혼란을 주기 때문에 React에서는 class 대신 className, for 대신 htmlFor 속성명 사용

<BR />

#### Optional property (선택 속성)

- 선택 속성 선언시 이름 뒤에 물음표 ? 붙이기

```
export type IconProps = {
  name: string
  style?: CSSProperties
}
```

<BR />

#### 속성 타입을 모를 때

- 모르는 속성값 선택 후 F12 눌러 '정의로 이동' 메뉴를 선택하면 속성 정의 확인 가능
- ex) style 속성: style?: CSSProperties | undefined;

<BR />

#### ... 연산자

- Typescript가 제공
- 쓰이는 곳에 따라 Spread operator(전개 연산자), Rest operator(잔여 연산자)로 사용됨

```
export const Icon: FC<IconProps> = ({name, ...remains}) => {
    return <span {...remains}>{name}</span>
}
```

<BR />

#### DetailedHTMLProps, HTMLAttributes

- 한꺼번에 특정 HTML 요소의 속성들을 추가할 수 있는 타입
- React Framework가 제공

<BR />

#### Typescript에서 매개변수 이름 변경

- 매개변수 이름 뒤에 콜론 : 붙이기

```
// className 변수 이름을 _className 으로 변경
export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {}
```
