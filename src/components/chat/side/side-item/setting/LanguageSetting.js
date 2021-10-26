
function LanguageSetting() {
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <i className="material-icons md-30 online">language</i>
                <div className="data">
                    <h5>Language</h5>
                    <p>Select preferred language</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionSettings">
                <div className="content layer">
                    <div className="language">
                        <label htmlFor="country">Language</label>
                        <select className="custom-select" id="country" required>
                            <option value>Select an language...</option>
                            <option>English, UK</option>
                            <option>English, US</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LanguageSetting;