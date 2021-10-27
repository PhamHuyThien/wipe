import axios from "axios";
import { debounce } from "lodash";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Server from "../../../../../constaint/Server";
import { loadingOpen } from "../../../../../redux/LoadingSlice";
import SocketUtil from "../../../../../util/SocketUtil";
import Toast from "../../../../../util/Toast";



function CreateChats() {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [recipient, setRecipient] = useState({ id: -1, recipientJsx: <div></div> });
    const { register, handleSubmit } = useForm();

    async function onSubmitCreateConversationHandle(forms) {
        if (recipient.id === -1) {
            Toast.fire({
                icon: "warning",
                title: "Bạn phải nhập tên tài khoản để tạo cuộc trò chuyện."
            });
        } else if (forms.nameConversation.trim().length === 0) {
            Toast.fire({
                icon: "warning",
                title: "Bạn phải nhập tên tên cuộc trò chuyện."
            });
        } else {
            let result = await axios.post(Server.API_CREATE_CONVERSATION, {
                userId: recipient.id,
                conversationName: forms.nameConversation.trim(),
                messages: forms.messages
            }, {
                headers: { "Authorization": "Bearer " + token }
            }).catch(function (err) {
                return { data: err.response.data };
            });
            Toast.fire({
                icon: result.data.status ? "success" : "warning",
                title: result.data.status ? "Tạo cuộc trò chuyện thành công." : result.data.message
            });
            SocketUtil.socket.send(`/app/${SocketUtil.token}/list-conversation`);
        }
    }

    async function onChangeSearchHandler(evt) {
        dispatch(loadingOpen(true));
        let value = evt.target.value;
        let result = await axios.get(Server.API_SEARCH_FRIEND_ACCEPT + `?search=${encodeURIComponent(value)}`, {
            headers: { "Authorization": "Bearer " + token }
        }).catch(function (err) {
            return { data: err.response.data };
        });
        if (result.data.status === true && result.data.data.length === 1) {
            let friend = result.data.data[0];
            setRecipient({
                id: friend.user.id,
                recipientJsx: <RecipientJsx friend={friend}></RecipientJsx>
            });
        } else {
            setRecipient({ id: -1, recipientJsx: <div></div> });
        }
        dispatch(loadingOpen(false));
    }

    function resetRecipientJsx() {
        setRecipient({ id: -1, recipientJsx: <div></div> });
    }

    function RecipientJsx({ friend }) {
        return (
            <div className="user" id="recipient">
                <img className="avatar-sm" src={friend.user.profile.avatar.url} alt="avatar" />
                <h5>{friend.user.profile.firstName + " " + friend.user.profile.lastName}</h5>
                <button className="btn" onClick={resetRecipientJsx}><i className="material-icons">close</i></button>
            </div>
        );
    }
    return (
        <div className="modal fade" id="startnewchat" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="requests">
                    <div className="title">
                        <h1>Tạo cuộc trò chuyện mới</h1>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="material-icons">close</i></button>
                    </div>
                    <div className="content">
                        <form onSubmit={handleSubmit(onSubmitCreateConversationHandle)}>
                            <div className="form-group">
                                <label htmlFor="participant">Username hoặc email người nhận:</label>
                                <input type="text" className="form-control" id="participant" onKeyDown={debounce(onChangeSearchHandler, 1000)} placeholder="phamhuythien" required />
                                {recipient.recipientJsx}
                            </div>
                            <div className="form-group">
                                <label htmlFor="topic">Tên cuộc trò chuyện:</label>
                                <input type="text" className="form-control" {...register("nameConversation")} placeholder="Nhóm chăn rau..." required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Tin nhắn:</label>
                                <textarea className="text-control" id="message" {...register("messages")} placeholder="Chào mọi người..." />
                            </div>
                            <button type="submit" className="btn button w-100">Bắt đầu cuộc trò chuyện</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateChats;