import PropTypes from 'prop-types'

const Label = ({ children, ...props }) => {
  return (
    <label className='text-sm font-medium inline-block mb-0.5' {...props}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node
}

export default Label
