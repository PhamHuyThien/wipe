import { useSelector } from "react-redux";

function ListFriend() {
    const listFriend = useSelector(state => state.listFriend.list);
    return listFriend.map((friend, id) => {
        return <Friend id={friend.id} avatar={friend.profile.avatar.url} firstName={friend.profile.firstName} lastName={friend.profile.lastName} key={id}></Friend>;
    });
}
function Friend({
    id, avatar, firstName, lastName,
}) {
    function onclickOpenMessageHandle(evt, id) {

    }
    return (
        <a href="#" className="filterMembers all online contact" data-toggle="list">
            <img className="avatar-md" src={avatar} data-toggle="tooltip" data-placement="top" title={firstName + "  " + lastName} alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
                <h5>{firstName + "  " + lastName}</h5>
                <p>Bạn bè</p>
            </div>
            <div className="person-add" onClick={(evt) => onclickOpenMessageHandle(evt, id)}>
                <i className="material-icons">message</i>
            </div>
        </a>
    );
}

export default ListFriend;