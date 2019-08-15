import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  timestamp: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
});
