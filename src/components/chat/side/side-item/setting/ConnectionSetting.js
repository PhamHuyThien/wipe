function ConnectionSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <i className="material-icons md-30 online">sync</i>
                <div className="data">
                    <h5>Connections</h5>
                    <p>Sync your social accounts</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionSettings">
                <div className="content">
                    <div className="app">
                        <img src="assets/img/integrations/slack.svg" alt="app" />
                        <div className="permissions">
                            <h5>Skrill</h5>
                            <p>Read, Write, Comment</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="app">
                        <img src="assets/img/integrations/dropbox.svg" alt="app" />
                        <div className="permissions">
                            <h5>Dropbox</h5>
                            <p>Read, Write, Upload</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="app">
                        <img src="assets/img/integrations/drive.svg" alt="app" />
                        <div className="permissions">
                            <h5>Google Drive</h5>
                            <p>No permissions set</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="app">
                        <img src="assets/img/integrations/trello.svg" alt="app" />
                        <div className="permissions">
                            <h5>Trello</h5>
                            <p>No permissions set</p>
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

export default ConnectionSetting;