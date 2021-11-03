import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMessagesSetConversation, listMessagesUnshiftList } from "../../../../../redux/ListMessagesSlice";
import { timeToHhIiDdMm } from "../../../../../util/DateUtils";
import SocketUtil from "../../../../../util/SocketUtil";
import Toast from "../../../../../util/Toast";

function Conversation({ conversation }) {
    const dispatch = useDispatch();
    const [read, setRead] = useState({ status: false, class: "", star: <div></div> });
 
    useEffect(() => {
        let newMessages = conversation.newMessages;
        let lastMessages = conversation.lastMessages;
        let status = !(newMessages?.id === lastMessages?.id);
        setRead({
            status: status,
            class: status ? "unread" : "read",
            star: status ? <Status></Status> : <div></div>
        });
    }, [conversation]);

    function onClickOpenMessagesHandle() {
        dispatch(listMessagesSetConversation(conversation));
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-messages`, JSON.stringify({ conversationId: conversation.id }));
        if (SocketUtil.destination != null) {
            SocketUtil.socket.unsubscribe(SocketUtil.destination.id);
        }
        SocketUtil.destination = SocketUtil.socket.subscribe(`/messages/conversation_${conversation.id}`, socketConversationCallback);
    }

    
    function socketConversationCallback(data) {
        let json = JSON.parse(data.body);
        switch (json.type) {
            case "SEND_MESSAGES":
                if (checkResponse(json)) {
                    dispatch(listMessagesUnshiftList(json.data));
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

    function Status() {
        return (
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
        );
    }
    return (
        <a href="#list-chat" className={"filterDiscussions all single " + read.class} id={conversation.id} data-toggle="list" role="tab" onClick={onClickOpenMessagesHandle}>
            <img className="avatar-md" src={conversation.image?.url} data-toggle="tooltip" data-placement="top" title={conversation.name} alt="avatar" />
            {read.star}
            <div className="data">
                <h5>{conversation.name}</h5>
                <span>{timeToHhIiDdMm(conversation.updateAt)}</span>
                <p>{read.status && conversation.newMessages != null ? conversation.newMessages.message : conversation.newMessages == null ? "Không có tin nhắn." : conversation.newMessages.message}</p>
            </div>
        </a>
    );
}

export default Conversation;