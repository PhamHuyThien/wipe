import { useSelector } from "react-redux";

function ListFriendRequest() {
    const listFriendRequest = useSelector(state => state.listFriendRequest.list);
    return listFriendRequest.map((friend, id) => {
        console.log(friend);
        return <FriendRequest id={friend.id} avatar={friend.profile.avatar.url} firstName={friend.profile.firstName} lastName={friend.profile.lastName} key={id}></FriendRequest>;
    });
}
function FriendRequest({
    id, avatar, firstName, lastName,
}) {
    return (
        <a href="#" className="filterMembers all contact" data-toggle="list">
            <img className="avatar-md" src={avatar} data-toggle="tooltip" data-placement="top" title={firstName + "  " + lastName} alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data" style={{ width: "50%" }}>
                <h5>{firstName + "  " + lastName}</h5>
                <p>Gửi lời mời kết bạn</p>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" style={{background: ""}}>Đồng ý</button>
            </div>
        </a>
    );
}

export default ListFriendRequest;