import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SocketUtil from "../../../util/SocketUtil";
import MessageMe from "./MessageMe";
import MessageYou from "./MessageYou";

function Chat() {
    const listMessages = useSelector(state => state.listMessages);
    const userInfo = useSelector(state => state.userInfo);
    const { register, handleSubmit } = useForm();
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

    function onClickSendHandle() {

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
                                                <a href="#"><img className="avatar-md" src={listMessages.conversation.image?.url} data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" /></a>
                                                <div className="status">
                                                    <i className="material-icons online">fiber_manual_record</i>
                                                </div>
                                                <div className="data">
                                                    <h5><a href="#">{listMessages.conversation.name}</a></h5>
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
                                <div className="col-md-12">
                                    {
                                        listMessages.list.length == 0 ? <NoMessages></NoMessages> : listMessages.list.map((message, id) => {
                                            if (message.userInfoResponse.id == userInfo.userInfo.id) {
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
                                            <form className="position-relative w-100">
                                                <textarea className="form-control" placeholder="Nhập nội dung..." rows={1} defaultValue={""} />
                                                <button className="btn emoticons"><i className="material-icons" onClick={evt => evt.preventDefault()}>insert_emoticon</i></button>
                                                <button type="submit" className="btn send"><i className="material-icons" onClick={handleSubmit(onClickSendHandle)}>send</i></button>
                                            </form>
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