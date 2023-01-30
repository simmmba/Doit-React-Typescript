// 개선된 방법, onclick 사용
const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click event1 on rootDiv', isTrusted, target, bubbles)
  }

  // 가장 마지막에 설정된 callback 함수 호출
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click event2 on rootDiv', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}
