import { useSelector } from "react-redux";
import SocketUtil from "../../../util/SocketUtil";

function Navigation() {
    const avatar = useSelector((state) => state.userInfo.userInfo.profile.avatar.url);
    function onClickLogoutHandler() {
        if (SocketUtil.socket != null) {
            SocketUtil.socket.disconnect();
        }
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    return (
        <div className="navigation">
            <div className="container">
                <div className="inside">
                    <div className="nav nav-tab menu">
                        <button className="btn">
                            <img className="avatar-xl" src={avatar} alt="avatar" />
                        </button>
                        <a href="#members" data-toggle="tab">
                            <i className="material-icons">account_circle</i>
                        </a>
                        <a href="#discussions" data-toggle="tab">
                            <i className="material-icons">chat_bubble_outline</i>
                        </a>
                        <a href="#notifications" data-toggle="tab" className="f-grow1">
                            <i className="material-icons">notifications_none</i>
                        </a>
                        <button className="btn mode">
                            <i className="material-icons">brightness_2</i>
                        </button>
                        <a href="#settings" data-toggle="tab">
                            <i className="material-icons">settings</i>
                        </a>
                        <button className="btn power" onClick={onClickLogoutHandler}>
                            <i className="material-icons">power_settings_new</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;