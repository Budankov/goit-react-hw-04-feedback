import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
