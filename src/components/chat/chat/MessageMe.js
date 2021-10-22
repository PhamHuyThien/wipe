import Attachments from "./Attachments";

function MessageMe({
    time, content, attachments = []
}) {
    return (
        <div className="message me">
            <div className="text-main">
                <div className="text-group me">
                    <div className="text me">
                        <Attachments attachments={attachments}></Attachments>
                        <p>{content}</p>
                    </div>
                </div>
                <span>{time}</span>
            </div>
        </div>
    );
}

export default MessageMe;