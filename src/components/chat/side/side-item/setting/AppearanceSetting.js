function AppearanceSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                <i className="material-icons md-30 online">colorize</i>
                <div className="data">
                    <h5>Appearance</h5>
                    <p>Customize the look of Swipe</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionSettings">
                <div className="content no-layer">
                    <div className="set">
                        <div className="details">
                            <h5>Turn Off Lights</h5>
                            <p>The dark mode is applied to core areas of the app that are normally displayed as light.</p>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round mode" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppearanceSetting;