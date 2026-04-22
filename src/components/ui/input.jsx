import PropTypes from 'prop-types'

import Label from './Label'

const Input = ({ id, label, type = 'text', ...props }) => {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}

      <input
        type={type}
        id={id}
        className='block w-full rounded-lg border-none px-3 py-1.5 text-sm/6 text-slate-700 outline outline-1 -outline-offset-1 outline-slate-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string
}

export default Input
