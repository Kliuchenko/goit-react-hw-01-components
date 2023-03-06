import React from "react";
import Profile from "./profile/Profile";
import user from "../data/user.json";
import "./profile/Profile.css";
import "./statistics/Statistics.css";
import { Statistics } from "./statistics/Statics";
import data from "../data/data.json";
import { FriendList } from "./friendlist/FriendList";
import friends from "../data/friends.json"
import "./friendlist/FriendList.css"
import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "../data/transactions.json";
import "./transactions/TransactionHistory.css"


export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
