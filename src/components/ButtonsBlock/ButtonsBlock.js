import React from 'react';

import ButtonFeedback from './ButtonFeedback';

import s from './ButtonsBlock.module.scss';

const ButtonsBlock = props => {
  return (
    <div className={s.buttonsBlock}>
      <ButtonFeedback name="good" {...props} />
      <ButtonFeedback name="neutral" {...props} />
      <ButtonFeedback name="bad" {...props} />
    </div>
  );
};

export default ButtonsBlock;
