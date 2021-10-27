import { timeToHhIiDdMm } from "../../../util/DateUtils";
import Attachments from "./Attachments";


function MessageYou({ message }) {
    return (
        <div className="message">
            <img className="avatar-md" src={message.userInfoResponse.profile.avatar?.url} data-toggle="tooltip" data-placement="top" title={message.userInfoResponse.profile.firstName + message.userInfoResponse.profile.lastName} alt="avatar" />
            <div className="text-main">
                <div className="text-group">
                    <div className="text">
                        <Attachments attachments={message.attachments}></Attachments>
                        <p>{message.messages.message}</p>
                        <span style={{ float: "right", fontSize: "12px"}}>{timeToHhIiDdMm(message.messages?.createAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MessageYou;