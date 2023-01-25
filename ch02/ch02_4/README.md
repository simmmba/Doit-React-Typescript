# key, children 속성

## key 속성

- React는 사용자 컴포넌트에 key 속성 제공
- 같은 이름의 컴포넌트가 여러 개일 때, 이들을 구분하기 위해 만든 속성
- 선택 속성
- 문자열, 숫자 중 설정
- 보통 데이터를 배열에 담은 뒤, map 메서드의 item index 값을 key값으로 설정
  <br /><br />

## children 속성

- 모든 리액트 컴포넌트, 사용자 컴포넌트에서 사용 가능
- 선택 속성
- 자식 요소를 포함할 수 있는 컴포넌트에서만 사용 가능

```
사용 가능) <div>, <ul>
사용 불가능) <img>, <input>
```

- React 18 버전부터 children 속성은 PropsWithChildren 제네릭 타입
  - 17 버전까지는 FC 타입에 포함
  - children을 포함한 props를 가리키는 타입

```
// React 17 버전까지, children 속성은 FC 타입
import type {FC, ReactNode} from 'react'

export type PProps = {
  children?: ReactNode
}

const P: FC<PProps> = props => {
  const {children} = props
  return <p children={children} />
}


// React 18 버전부터 children 속성은 PropsWithChildren 제네릭 타입
import type {FC, PropsWithChildren} from 'react'

export type PProps = {}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
```

<br />

### \* JSX {...props} 구문

- props에 담긴 다양한 속성을 Typescript의 spread operator (전개 연산자) 처럼 한꺼번에 전달
  <br /><br />
