import { useEffect } from "react";
import { timeToHhIiDdMm } from "../../../util/DateUtils";
import Attachments from "./Attachments";

function MessageMe({ message }) {

    useEffect(() => {
        console.log(message);
    }, []);
    return (
        <div className="message me">
            <div className="text-main">
                <div className="text-group me">
                    <div className="text me">
                        <Attachments attachments={message.attachments}></Attachments>
                        <p>{message.messages.message}</p>
                        <span style={{fontSize: "12px", color: "#f9f9f9"}}>{timeToHhIiDdMm(message.messages?.createAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageMe;