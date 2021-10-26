function FrivateSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                <i className="material-icons md-30 online">lock_outline</i>
                <div className="data">
                    <h5>Privacy &amp; Safety</h5>
                    <p>Control your privacy settings</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseSeven" aria-labelledby="headingSeven" data-parent="#accordionSettings">
                <div className="content no-layer">
                    <div className="set">
                        <div className="details">
                            <h5>Keep Me Safe</h5>
                            <p>Automatically scan and delete direct messages you receive from everyone that contain explict content.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>My Friends Are Nice</h5>
                            <p>If enabled scans direct messages from everyone unless they are listed as your friend.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Everyone can add me</h5>
                            <p>If enabled anyone in or out your friends of friends list can send you a friend request.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Friends of Friends</h5>
                            <p>Only your friends or your mutual friends will be able to send you a friend reuqest.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Data to Improve</h5>
                            <p>This settings allows us to use and process information for analytical purposes.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Data to Customize</h5>
                            <p>This settings allows us to use your information to customize Swipe for you.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrivateSetting;