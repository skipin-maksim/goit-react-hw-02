import React from 'react';

import PropTypes from 'prop-types';

import FriendsItem from './FriendsItem';

import s from './FriendList.module.scss';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...otherProps }) => (
        <FriendsItem key={id} {...otherProps} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
