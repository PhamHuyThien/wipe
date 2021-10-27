import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listMessagesSetConversation } from "../../../../../redux/ListMessagesSlice";
import { timeToHhIiDdMm } from "../../../../../util/DateUtils";
import SocketUtil from "../../../../../util/SocketUtil";

function Conversation({ conversation }) {
    const dispatch = useDispatch();
    const [read, setRead] = useState({ status: false, class: "", star: <div></div> });
    useEffect(() => {
        let newMessages = conversation.newMessages;
        let lastMessages = conversation.lastMessages;
        let status = !(newMessages?.id == lastMessages?.id);
        setRead({
            status: status,
            class: status ? "unread" : "read",
            star: status ? <Status></Status> : <div></div>
        });
    }, [conversation]);

    function onClickOpenMessagesHandle() {
        dispatch(listMessagesSetConversation(conversation));
        SocketUtil.socket.send(`/app/${SocketUtil.token}/list-messages`, JSON.stringify({ conversationId: conversation.id }));
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