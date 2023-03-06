export const FriendListItem = ({friendsList}) => {
    return (
            <li
            className="friends-item"
            key={friendsList.id}>
            <span className="friends-status"
                style={{ backgroundColor: friendsList.isOnline ? "green" : "red" }}>
                {friendsList.isOnline}
            </span>
                <img className="friends-avatar" src={ friendsList.avatar } alt="User avatar" width="48" />
                <p className="friends-name">{ friendsList.name }</p>
            </li>
    )   
} 