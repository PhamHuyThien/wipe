import axios from "axios";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import Server from "../../../../constaint/Server";
import { listFriendSet } from "../../../../redux/ListFriendSlice";
import { loadingOpen } from "../../../../redux/LoadingSlice";
import SocketUtil from "../../../../util/SocketUtil";
import ListFriend from "./contact/ListFriend";
import ListFriendRequest from "./contact/ListFriendRequest";

function Contacts() {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    async function onChangeSearchPeopleHandle(evt) {
        dispatch(loadingOpen(true));
        let value = evt.target.value;
        if (value === "") {
            SocketUtil.socket.send(`/app/${SocketUtil.token}/list-friend`);
        } else {
            let result = await axios.get(Server.API_SEARCH_FRIEND_ACCEPT + `?search=${encodeURIComponent(value)}`, {
                headers: { "Authorization": "Bearer " + token }
            }).catch(function (err) {
                return { data: err.response.data };
            });
            if (result.data.status === true) {
                dispatch(listFriendSet(result.data.data));
            }
        }
        dispatch(loadingOpen(false));
    }
    return (
        <div className="tab-pane fade" id="members">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" placeholder="Tìm kiếm bạn bè.." onKeyDown={debounce(onChangeSearchPeopleHandle, 1000)} />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i className="material-icons">person_add</i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterMembersBtn active show" data-toggle="list" data-filter="all">Tất cả</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
            </div>
            <div className="contacts">
                <h1>Bạn bè</h1>
                <div className="list-group" id="contacts" role="tablist">
                    <ListFriendRequest></ListFriendRequest>
                    <ListFriend></ListFriend>
                </div>
            </div>
        </div>
    );
}

export default Contacts;