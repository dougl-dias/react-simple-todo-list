import PropTypes from 'prop-types'

const Card = ({ className = '', children }) => {
  return <div className={`bg-white py-6 px-8 rounded-lg border border-slate-300 mx-auto ${className}`}>{children}</div>
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Card
