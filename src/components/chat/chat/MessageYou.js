import Attachments from "./Attachments";


function MessageYou({
    avatar, name, time, content, attachments = []
}) {
    return (
        <div className="message">
            <img className="avatar-md" src={avatar} data-toggle="tooltip" data-placement="top" title={name} alt="avatar" />
            <div className="text-main">
                <div className="text-group">
                    <div className="text">
                        <Attachments attachments={attachments}></Attachments>
                        <p>{content}</p>
                    </div>
                </div>
                <span>{time}</span>
            </div>
        </div>
    );
}


export default MessageYou;