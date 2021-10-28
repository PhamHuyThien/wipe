function Noti() {
    return (
        <div>
            <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                <img className="avatar-md" src="assets/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                <div className="status">
                    <i className="material-icons online">fiber_manual_record</i>
                </div>
                <div className="data">
                    <p>Chào mừng bạn đến với WipeChat.</p>
                    <span>11:7 - 12/8</span>
                </div>
            </a>
            <a href="#" className="filterNotifications all oldest notification" data-toggle="list">
                <img className="avatar-md" src="assets/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                <div className="status">
                    <i className="material-icons offline">fiber_manual_record</i>
                </div>
                <div className="data">
                    <span>Phát hành phiên bản đầu tiên.</span>
                    <span>23:7 - 11/8</span>
                </div>
            </a>

        </div>
    );
}

export default Noti;