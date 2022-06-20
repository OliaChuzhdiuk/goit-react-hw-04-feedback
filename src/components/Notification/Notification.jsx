import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{message}</h2>
    </div>
  );
}

Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;