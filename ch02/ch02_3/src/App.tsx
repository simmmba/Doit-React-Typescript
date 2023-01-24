// Class Component
// import {Component} from 'react'
import ClassComponent from './ClassComponent'

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="https://www.google.com" text="go to Google" />
//         <ClassComponent href="https://www.naver.com" text="go to Naver" />
//       </ul>
//     )
//   }
// }

// Functional Component
// function 키워드 사용
// export default function App() {
//   return <div>Hello function-keyword component!</div>
// }

// Functional Component
// 화살표 => 사용
// const App = () => {
//   return <div>Hello arrow-function component!</div>
// }
// export default App

import ArrowComponent from './ArrowComponent'
export default function App() {
  return (
    <ul>
      <ClassComponent href="https://www.google.com" text="go to Google" />
      <ArrowComponent href="https://www.naver.com" text="go to Naver" />
    </ul>
  )
}
