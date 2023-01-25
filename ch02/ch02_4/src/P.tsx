// React 17 버전까지, children 속성은 FC 타입
// import type {FC, ReactNode} from 'react'

// export type PProps = {
//   children?: ReactNode
// }

// const P: FC<PProps> = props => {
//   const {children} = props
//   return <p children={children} />
// }

// React 18 버전부터 children 속성은 PropsWithChildren 제네릭 타입
import type {FC, PropsWithChildren} from 'react'

export type PProps = {}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}

export default P
