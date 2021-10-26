import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Server from "../../../../../constaint/Server";
import { loadingOpen } from "../../../../../redux/LoadingSlice";
import SocketUtil from "../../../../../util/SocketUtil";
import Toast from "../../../../../util/Toast";

function ListFriendRequest() {
    const listFriendRequest = useSelector(state => state.listFriendRequest.list);
    return listFriendRequest.map((friend, id) => {
        return <FriendRequest id={friend.id} avatar={friend.profile.avatar.url} firstName={friend.profile.firstName} lastName={friend.profile.lastName} key={id}></FriendRequest>;
    });
}

function FriendRequest({
    id, avatar, firstName, lastName,
}) {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    async function onClickAcceptFriendHandle(evt, id) {
        dispatch(loadingOpen(true));
        let result = await axios.post(Server.API_ACCEPT_FRIEND, { userId: id }, {
            headers: { "Authorization": "Bearer " + token }
        }).catch(function (err) {
            return { data: err.response.data };
        });
        Toast.fire({
            icon: result.data.status ? "success" : "warning",
            title: result.data.status ? "Đồng ý kết bạn thành công." : result.data.message
        });
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-friend-request`);
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-friend`);
        dispatch(loadingOpen(false));
    }
    return (
        <a href="#" className="filterMembers all contact" data-toggle="list">
            <img className="avatar-md" src={avatar} data-toggle="tooltip" data-placement="top" title={firstName + "  " + lastName} alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
                <h5>{firstName + "  " + lastName}</h5>
                <p>Gửi lời mời kết bạn</p>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" style={{ background: "#2196f3" }} onClick={(evt) => onClickAcceptFriendHandle(evt, id)}>Accept</button>
            </div>
        </a>
    );
}

export default ListFriendRequest;