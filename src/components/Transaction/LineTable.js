import React from 'react';

import s from './Transaction.module.scss';

const LineTable = ({ type, amount, currency }) => (
  <tr className={s.lineTable}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

export default LineTable;
