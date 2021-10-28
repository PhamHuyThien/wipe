import Noti from "./noti/Noti";

function Notifications() {
    return (
        <div id="notifications" className="tab-pane fade">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="notice" placeholder="Tìm kiếm..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons filter-list">filter_list</i></button>
                </form>
            </div>
            <div className="list-group sort">
                <button className="btn filterNotificationsBtn active show" data-toggle="list" data-filter="all">All</button>
                <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="latest">Mới</button>
                <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="oldest">Cũ</button>
            </div>
            <div className="notifications">
                <h1>Thông báo</h1>
                <div className="list-group" id="alerts" role="tablist">
                    <Noti></Noti>
                </div>
            </div>
        </div>
    );
}

export default Notifications;