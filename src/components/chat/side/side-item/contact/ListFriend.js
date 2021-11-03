import { useDispatch, useSelector } from "react-redux";
import { onClickUnfriendHandle } from "./ListFriendRequest";

const token = localStorage.getItem("token");
function ListFriend() {
    const listFriend = useSelector(state => state.listFriend.list);
    return listFriend.map((friend, id) => {
        return <Friend friend={friend} key={id}></Friend>;
    });
}
function Friend({friend}) {
    const dispatch = useDispatch();
    function onclickOpenMessageHandle(evt, id) {
    }
    return (
        <a href="#" className="filterMembers all online contact" data-toggle="list">
            <img className="avatar-md" src={friend.profile.avatar.url} data-toggle="tooltip" data-placement="top" title={friend.profile.firstName + "  " + friend.profile.lastName} alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
                <h5>{`${friend.profile.firstName} ${friend.profile.lastName}`}<span style={{fontWeight: "normal", color: "#bdbac2", fontSize: "12px"}}>&nbsp;{`(@${friend.username})`}</span></h5>
                <p>Bạn bè</p>
            </div>
            <div className="person-add" onClick={(evt) => onClickUnfriendHandle(evt, friend.id, dispatch, token)} style={{ color: "red", marginRight: "20px" }}>
                <i className="material-icons">close</i>
            </div>
            <div className="person-add" onClick={(evt) => onclickOpenMessageHandle(evt, friend.id)}>
                <i className="material-icons">message</i>
            </div>
        </a>
    );
}

export default ListFriend;