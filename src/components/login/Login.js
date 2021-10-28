import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Server from "../../constaint/Server";
import { loadingOpen } from "../../redux/LoadingSlice";
import Toast from "../../util/Toast";
import SocketUtil from "../../util/SocketUtil";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { useEffect } from "react";
import md5 from "md5";
import { socketCallbackDisconnect } from "../../util/SocketCallback";

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (SocketUtil.connected) {
            dispatch("/chats");
        }
    });

    async function onClickLoginHandler(forms) {
        dispatch(loadingOpen(true));
        let result = await axios.post(Server.API_LOGIN, forms).catch(function (err) {
            return { data: err.response.data };
        });
        if (result.data.status === true) {
            if (SocketUtil.connected) {
                SocketUtil.socket.disconnect();
                SocketUtil.connected = false;
            }
            let sockJs = new SockJS(Server.API_SOCKET);
            let stompSockJs = Stomp.over(sockJs);
            stompSockJs.connect({
                "Authorization": "Bearer " + result.data.data.token
            }, connected => {
                SocketUtil.socket = stompSockJs;
                SocketUtil.connected = true;
                SocketUtil.token = md5(forms.username);
                localStorage.setItem("token", result.data.data.token);
                Toast.fire({
                    icon: "success",
                    title: "Đăng nhập thành công."
                }).then(() => {
                    history.push("/chats");
                });
                dispatch(loadingOpen(false));
            }, error => {
                socketCallbackDisconnect(error);
                Toast.fire({
                    icon: "error",
                    title: "Đăng nhập thất bại."
                });
                dispatch(loadingOpen(false));
            });
        } else {
            Toast.fire({
                icon: "error",
                title: result.data.message
            });
        }
        dispatch(loadingOpen(false));
    }

    function onClickRegisterHandler() {
        history.push("/register");
    }
    return (
        <div>
            <main>
                <div className="layout">
                    {/* Start of Sign In */}
                    <div className="main order-md-1">
                        <div className="start">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="content">
                                        <h1>Đăng nhập WipeChat</h1>
                                        <div className="third-party">
                                            <button className="btn item bg-blue">
                                                <i className="material-icons">pages</i>
                                            </button>
                                            <button className="btn item bg-teal">
                                                <i className="material-icons">party_mode</i>
                                            </button>
                                            <button className="btn item bg-purple">
                                                <i className="material-icons">whatshot</i>
                                            </button>
                                        </div>
                                        <p>hoặc đăng nhập bằng tài khoản: </p>
                                        <form onSubmit={handleSubmit(onClickLoginHandler)}>
                                            <div className="form-group">
                                                <input type="text" {...register("username")} className="form-control" placeholder="Tài khoản" required />
                                                <button className="btn icon"><i className="material-icons">perm_identity</i></button>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" {...register("password")} className="form-control" placeholder="Mật khẩu" required />
                                                <button className="btn icon"><i className="material-icons">lock_outline</i></button>
                                            </div>
                                            <button type="submit" className="btn button">Đăng nhập</button>
                                            <div className="callout">
                                                <span>Don't have account? <a href="#" onClick={onClickRegisterHandler}>Create Account</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Sign In */}
                    {/* Start of Sidebar */}
                    <div className="aside order-md-2">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="preference">
                                    <h2>Xin chào bạn!</h2>
                                    <p>Nhập thông tin cá nhân của bạn và bắt đầu hành trình của bạn với WipeChat ngay hôm nay.</p>
                                    <button href="#" className="btn button" onClick={onClickRegisterHandler}>Đăng kí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Layout */}
            </main>
        </div>
    );
}

export default Login;