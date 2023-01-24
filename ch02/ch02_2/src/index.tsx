import ReactDOM from 'react-dom/client'
import * as D from './data'

const children1 = [
  <li>
    <a href="https://www.google.com" target="_blank" rel="noreferrer">
      <p>go to Google</p>
    </a>
  </li>,
  <li>
    <a href="https://www.naver.com" target="_blank" rel="noreferrer">
      <p>go to Naver</p>
    </a>
  </li>,
  <li>
    <a href="https://www.daum.net" target="_blank" rel="noreferrer">
      <p>go to Daum</p>
    </a>
  </li>
]

const children2 = [0, 1, 2].map((n: number) => <h3>Hello world {n} !</h3>)

const children3 = D.makeArray(10).map((notUsed, idx) => (
  <div key={idx}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} alt="random pic" />
    <br />
    <br />
  </div>
))

const rootVirtualDOM = (
  <>
    <ul>{children1}</ul>
    <br />
    <div>{children2}</div>
    <br />
    <div>{children3}</div>
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
