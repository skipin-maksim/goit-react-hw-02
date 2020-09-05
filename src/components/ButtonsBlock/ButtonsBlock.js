import React, { Component } from 'react';

import ButtonFeedback from '../ButtonFeedback/ButtonFeedback';

import s from './ButtonsBlock.module.scss';

class ButtonsBlock extends Component {
  render() {
    const { title, ...otherProps } = this.props;

    return (
      <div className={s.buttonsBlock}>
        <ButtonFeedback name="good" {...otherProps} />
        <ButtonFeedback name="neutral" {...otherProps} />
        <ButtonFeedback name="bad" {...otherProps} />
      </div>
    );
  }
}

export default ButtonsBlock;
