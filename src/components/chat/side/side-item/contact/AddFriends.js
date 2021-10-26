import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Server from "../../../../../constaint/Server";
import Toast from "../../../../../util/Toast";
function AddFriends() {
    const firstName = useSelector(state => state.userInfo.userInfo.profile.firstName);
    const [contact, setContact] = useState({ id: -1, contactJSX: <div></div> });
    const { handleSubmit } = useForm();
    const token = localStorage.getItem("token");


    async function onChangeSearchHandler(evt) {
        let value = evt.target.value;
        let result = await axios.get(Server.API_SEARCH_FRIEND + `?search=${encodeURIComponent(value)}`, {
            headers: { "Authorization": "Bearer " + token }
        }).catch(function (err) {
            return { data: err.response.data };
        });
        if (result.data.status === true && result.data.data.length === 1) {
            let friend = result.data.data[0];
            setContact({
                id: friend.user.id,
                contactJSX: <ContactJsx friend={friend}></ContactJsx>
            });
        } else {
            setContact({ id: -1, contactJSX: <div></div> });
        }
    }

    async function onSubmitSendFriendRequestHandle() {
        if (contact.id === -1) {
            Toast.fire({
                icon: "warning",
                title: "Bạn phải nhập tên tài khoản để gửi lời mời kết bạn."
            });
        } else {
            let result = await axios.post(Server.API_SEND_FRIEND, { userId: contact.id }, {
                headers: { "Authorization": "Bearer " + token }
            }).catch(function (err) {
                return { data: err.response.data };
            });
            Toast.fire({
                icon: result.data.status ? "success" : "warning",
                title: result.data.status ? "Gửi lời mời kết bạn thành công." : result.data.message
            });
        }
    }

    function resetContactJsx() {
        setContact((contact) => {
            return {
                id: -1,
                contactJSX: <div></div>
            };
        });
    }

    function ContactJsx({ friend }) {
        return (
            <div className="user" id="contact">
                <img className="avatar-sm" src={friend.user.profile.avatar.url} alt="avatar" />
                <h5>{friend.user.profile.firstName + " " + friend.user.profile.lastName}</h5>
                <button className="btn" onClick={resetContactJsx}><i className="material-icons">close</i></button>
            </div>
        );
    }
    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="requests">
                    <div className="title">
                        <h1>Thêm bạn bè:</h1>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="material-icons">close</i></button>
                    </div>
                    <div className="content">
                        <form onSubmit={handleSubmit(onSubmitSendFriendRequestHandle)}>
                            <div className="form-group">
                                <label htmlFor="user">Tên tài khoản:</label>
                                <input type="text" className="form-control" onChange={onChangeSearchHandler} placeholder="phamhuythien" required />
                                {contact.contactJSX}
                            </div>
                            <div className="form-group">
                                <label htmlFor="welcome">Tin nhắn:</label>
                                <textarea className="text-control" id="welcome" placeholder={"xin chào bạn, mình là " + firstName + "..."} />
                            </div>
                            <button type="submit" className="btn button w-100" >Gửi lời mời kết bạn: </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFriends;