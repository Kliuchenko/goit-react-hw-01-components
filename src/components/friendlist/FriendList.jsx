import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => {
                return (
                    <FriendListItem key={friend.id} friendsList={friend}/>
                )
            })}
        </ul>
    )
}