function ChatSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="material-icons md-30 online">mail_outline</i>
                <div className="data">
                    <h5>Chats</h5>
                    <p>Check your chat history</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionSettings">
                <div className="content layer">
                    <div className="history">
                        <p>When you clear your conversation history, the messages will be deleted from your own device.</p>
                        <p>The messages won't be deleted or cleared on the devices of the people you chatted with.</p>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Hide will remove your chat history from the recent list.</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Delete will remove your chat history from the device.</label>
                        </div>
                        <button type="submit" className="btn button w-100">Clear blah-blah</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatSetting;