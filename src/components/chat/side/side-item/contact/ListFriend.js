import { useSelector } from "react-redux";

function ListFriend() {
    const listFriendRequest = useSelector(state => state.listFriendRequest.list);
    return listFriendRequest.map((friend) => {
        return <Friend></Friend>;
    });
}
function Friend({
    avatar, firstName, lastName,
}) {
    return (
        <a href="#" className="filterMembers all online contact" data-toggle="list">
            <img className="avatar-md" src={avatar} data-toggle="tooltip" data-placement="top" title={firstName + "  " + lastName} alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
                <h5>{firstName + "  " + lastName}</h5>
                <p>Lính mới</p>
            </div>
            <div className="person-add">
                <i className="material-icons">person</i>
            </div>
        </a>
    );
}

export default ListFriend;