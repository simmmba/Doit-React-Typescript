// 번거로운 방법
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click event1', isTrusted, target, bubbles)
})
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click event2', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
