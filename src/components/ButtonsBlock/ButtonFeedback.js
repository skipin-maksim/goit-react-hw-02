import React from 'react';

import s from './ButtonsBlock.module.scss';

const ButtonFeedback = ({ name, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      className={s[name]}
      onClick={() => {
        onLeaveFeedback(name);
      }}
    >
      {name}
    </button>
  );
};

export default ButtonFeedback;
