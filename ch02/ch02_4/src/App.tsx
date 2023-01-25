import P from './P'

export default function App() {
  // const texts = [<p key="a">hello</p>, <p key="b">world</p>]
  const texts = ['hello', 'world'].map((text, idx) => <P key={idx} children={text} />)
  return <div children={texts} />
}
