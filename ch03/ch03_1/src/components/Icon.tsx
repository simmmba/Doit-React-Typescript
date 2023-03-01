// import type {FC, CSSProperties} from 'react'
import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// export type IconProps = {
//   name: string
//   style?: CSSProperties
// }

export type IconProps = ReactSpanProps & {name: string}

// export const Icon: FC<IconProps> = ({name, style}) => {
// export const Icon: FC<IconProps> = ({name, ...props}) => {
//   return (
//     // <span className="material-icons" style={style}>
//     <span {...props} className="material-icons">
//       {name}
//     </span>
//   )
// }

export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}
