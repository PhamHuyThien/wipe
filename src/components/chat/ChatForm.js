import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listFriendRequestSet } from "../../redux/ListFriendRequestSlice";
import { listFriendSet } from "../../redux/ListFriendSlice";
import { userInfoSet } from "../../redux/UserInfoSlice";
import SocketUtil from "../../util/SocketUtil";
import Toast from "../../util/Toast";
import Chat from "./chat/Chat";
import Navigation from "./navi/Navigation";
import AddFriends from "./side/side-item/contact/AddFriends";
import CreateChats from "./side/side-item/discussion/CreateChats";
import Sidebar from "./side/Sidebar";

function ChatForm() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (SocketUtil.connected === false) {
            window.location.href = "/";
        }
        SocketUtil.socket.subscribe(`/messages/${SocketUtil.token}`, SocketCallback);
        SocketUtil.socket.send(`/app/${SocketUtil.token}/user-info`);
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-friend-request`);
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-friend`);
    }, []);

    function SocketCallback(data) {
        let json = JSON.parse(data.body);
        switch (json.type) {
            case "USER_INFO":
                if (checkResponse(json)) {
                    dispatch(userInfoSet(json.data))
                }
                break;
            case "LIST_FRIEND_REQUEST":
                if (checkResponse(json)) {
                    dispatch(listFriendRequestSet(json.data));
                }
                break;
            case "LIST_FRIEND":
                if (checkResponse(json)) {
                    dispatch(listFriendSet(json.data));
                }
                break;
            default:
                break;
        }

        function checkResponse(resp) {
            if (resp.status === false) {
                Toast.fire({
                    icon: "error",
                    title: resp.message
                });
                return false;
            }
            return true;
        }
    }
    return (
        <div>
            <main>
                <div className="layout">
                    <Navigation></Navigation>
                    <Sidebar></Sidebar>
                    <AddFriends></AddFriends>
                    <CreateChats></CreateChats>
                    <Chat></Chat>
                </div>
            </main>
        </div>
    );
}

export default ChatForm;