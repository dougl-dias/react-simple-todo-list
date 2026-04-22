import PropTypes from 'prop-types'

const variants = {
  primary: 'bg-indigo-600 text-white active:bg-indigo-600 hover:bg-indigo-700',
  secondary: 'bg-slate-500 text-white active:bg-slate-500 hover:bg-slate-600',
  success: 'bg-emerald-600 text-white active:bg-emerald-600 hover:bg-emerald-700',
  sky: 'bg-sky-500 text-white active:bg-sky-500 hover:bg-sky-600',
  danger: 'bg-red-400 text-white active:bg-red-400 hover:bg-red-500',
  transparent: 'bg-transparent text-slate-800'
}

const shapes = {
  default: 'py-1.5 px-3',
  toIcon: 'w-8 h-8 flex items-center justify-center'
}

const Button = ({ type = 'button', variant = 'primary', shape = 'default', children, ...props }) => {
  return (
    <button
      type={type}
      className={`inline-block rounded font-medium text-sm ${variant && variants[variant]} ${shape && shapes[shape]}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  shape: PropTypes.oneOf(['default', 'toIcon']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'sky', 'danger', 'transparent']),
  children: PropTypes.node
}

export default Button
