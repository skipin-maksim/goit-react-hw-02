import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transaction from './Transaction/Transaction';

import usersList from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => (
  <>
    <Profile {...usersList} />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <Transaction items={transactions} />
  </>
);

export default App;
