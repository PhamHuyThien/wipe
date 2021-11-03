import { useSelector } from "react-redux";
import AppearanceSetting from "./setting/AppearanceSetting";
import ChatSetting from "./setting/ChatSetting";
import ConnectionSetting from "./setting/ConnectionSetting";
import FrivateSetting from "./setting/FrivateSetting";
import LanguageSetting from "./setting/LanguageSetting";
import MyAccount from "./setting/MyAccount";
import NotificationSetting from "./setting/NotificationSetting";
import PowerOffSetting from "./setting/PowerOffSetting";

function Settings() {
    const userInfo = useSelector((state) => state.userInfo.userInfo);
    return (
        <div className="tab-pane fade" id="settings">
            <div className="settings">
                <div className="profile">
                    <img className="avatar-xl" src={userInfo.profile.avatar.url} alt="avatar" />
                    <h1><a href="#">{userInfo.profile.firstName + " " + userInfo.profile.lastName}</a></h1>
                    <span>{"@"+userInfo.username}</span>
                    <div className="stats">
                        <div className="item">
                            <h2>{userInfo.totalFriend}</h2>
                            <h3>Bạn bè</h3>
                        </div>
                        <div className="item">
                            <h2>{userInfo.totalConversation}</h2>
                            <h3>Cuộc trò chuyện</h3>
                        </div>
                    </div>
                </div>
                <div className="categories" id="accordionSettings">
                    <h1>Settings</h1>
                    <MyAccount></MyAccount>
                    {/* <ChatSetting></ChatSetting>
                    <NotificationSetting></NotificationSetting>
                    <ConnectionSetting></ConnectionSetting>
                    <AppearanceSetting></AppearanceSetting>
                    <LanguageSetting></LanguageSetting>
                    <FrivateSetting></FrivateSetting> */}
                    <PowerOffSetting></PowerOffSetting>
                </div>
            </div>
        </div>
    );
}

export default Settings;