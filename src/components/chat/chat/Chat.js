import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SocketUtil from "../../../util/SocketUtil";
import MessageMe from "./MessageMe";
import MessageYou from "./MessageYou";

function Chat() {
    const divRef = useRef(null);
    const listMessages = useSelector(state => state.listMessages);
    const userInfo = useSelector(state => state.userInfo);
    const { register, handleSubmit, setValue } = useForm();


    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
        }
    });

    function onKeyDownEnterHandle(evt) {
        if (evt.keyCode === 13 && !evt.shiftKey) {
            console.log(evt.key);
            handleSubmit(onClickSendHandle)();
            setTimeout(()=>setValue("content", ""), 5);
        }
    }

    function NoMessages() {
        return (
            <div className="no-messages">
                <i className="material-icons md-48">forum</i>
                <p>Chưa có tin nhắn nào.</p>
            </div>
        );
    }

    function Yesterday() {
        return (
            <div className="date">
                <hr />
                <span>Yesterday</span>
                <hr />
            </div>
        );
    }

    function onClickSendHandle(data) {
        let conversationId = listMessages.conversation.id;
        SocketUtil.socket.send(`/app/conversation_${conversationId}/send-messages`, JSON.stringify({
            conversationId: conversationId,
            message: data.content,
            attachments: [],
            qouteId: -1
        }));
        setValue("content", "");
    }

    return (
        <div className="main">
            <div className="tab-content" id="nav-tabContent">
                {/* Start of Babble */}
                <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                    {/* Start of Chat */}
                    <div className="chat" id="chat1">
                        <div className="top">
                            <div className="container">
                                <div className="col-md-12">
                                    {
                                        listMessages.conversation.name != null && (
                                            <div className="inside">
                                                <img className="avatar-md" src={listMessages.conversation.image?.url} data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
                                                <div className="status">
                                                    <i className="material-icons online">fiber_manual_record</i>
                                                </div>
                                                <div className="data">
                                                    <h5>{listMessages.conversation.name}</h5>
                                                    <span>Đang hoạt động</span>
                                                </div>
                                                <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-30">phone_in_talk</i></button>
                                                <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-36">videocam</i></button>
                                                <button className="btn d-md-block d-none"><i className="material-icons md-30">info</i></button>
                                                <div className="dropdown">
                                                    <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons md-30">more_vert</i></button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item connect" name={1}><i className="material-icons">phone_in_talk</i>Gọi điện</button>
                                                        <button className="dropdown-item connect" name={1}><i className="material-icons">videocam</i>Gọi video</button>
                                                        <hr />
                                                        <button className="dropdown-item"><i className="material-icons">clear</i>Xóa cuộc trò chuyện</button>
                                                        <button className="dropdown-item"><i className="material-icons">block</i>Chặn</button>
                                                        {/* <button className="dropdown-item"><i className="material-icons">delete</i></button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* empty */}
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12" ref={divRef}>
                                    {
                                        listMessages.list.length === 0 ? <NoMessages></NoMessages> : listMessages.list.slice().reverse().map((message, id) => {
                                            if (message.user.id === userInfo.userInfo.id) {
                                                return <MessageMe message={message} key={id}></MessageMe>;
                                            }
                                            return <MessageYou message={message} key={id}></MessageYou>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            listMessages.conversation.name != null && (
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="bottom">
                                            <div className="position-relative w-100">
                                                <textarea className="form-control" {...register("content")} placeholder="Nhập nội dung..." rows={1} onKeyDown={onKeyDownEnterHandle}/>
                                                <button className="btn emoticons"><i className="material-icons">insert_emoticon</i></button>
                                                <button type="submit" className="btn send"><i className="material-icons" onClick={handleSubmit(onClickSendHandle)}>send</i></button>
                                            </div>
                                            <label>
                                                <input type="file" />
                                                <span className="btn attach d-sm-block d-none"><i className="material-icons">attach_file</i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {/* <div className="call" id="call1">
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="panel">
                                            <div className="participant">
                                                <img className="avatar-xxl" src="assets/img/avatars/avatar-female-5.jpg" alt="avatar" />
                                                <span>Connecting</span>
                                            </div>
                                            <div className="options">
                                                <button className="btn option"><i className="material-icons md-30">mic</i></button>
                                                <button className="btn option"><i className="material-icons md-30">videocam</i></button>
                                                <button className="btn option call-end"><i className="material-icons md-30">call_end</i></button>
                                                <button className="btn option"><i className="material-icons md-30">person_add</i></button>
                                                <button className="btn option"><i className="material-icons md-30">volume_up</i></button>
                                            </div>
                                            <button className="btn back" name={1}><i className="material-icons md-24">chat</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Chat;