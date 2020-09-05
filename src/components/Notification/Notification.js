import React from 'react';

import s from './Notification.module.scss';

function Notification({ message }) {
  return <div className={s.noStatistics}>{message}</div>;
}

export default Notification;
