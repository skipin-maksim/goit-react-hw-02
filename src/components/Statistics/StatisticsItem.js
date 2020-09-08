import React from 'react';

const StatisticsItem = ({ name, data, totalStats }) => {
  return (
    <>
      {totalStats && (
        <li className="statisticsItem">
          {name}: <span>{totalStats()}</span>
        </li>
      )}

      {!totalStats && (
        <li className="statisticsItem">
          {name}: <span>{data}</span>
        </li>
      )}
    </>
  );
};

export default StatisticsItem;
