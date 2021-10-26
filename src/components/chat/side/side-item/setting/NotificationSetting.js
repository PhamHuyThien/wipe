function NotificationSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <i className="material-icons md-30 online">notifications_none</i>
                <div className="data">
                    <h5>Notifications</h5>
                    <p>Turn notifications on or off</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionSettings">
                <div className="content no-layer">
                    <div className="set">
                        <div className="details">
                            <h5>Desktop Notifications</h5>
                            <p>You can set up Swipe to receive notifications when you have new messages.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Unread Message Badge</h5>
                            <p>If enabled shows a red badge on the Swipe app icon when you have unread messages.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Taskbar Flashing</h5>
                            <p>Flashes the Swipe app on mobile in your taskbar when you have new notifications.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Notification Sound</h5>
                            <p>Set the app to alert you via notification sound when you have unread messages.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Vibrate</h5>
                            <p>Vibrate when receiving new messages (Ensure system vibration is also enabled).</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className="set">
                        <div className="details">
                            <h5>Turn On Lights</h5>
                            <p>When someone send you a text message you will receive alert via notification light.</p>
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
export default NotificationSetting;