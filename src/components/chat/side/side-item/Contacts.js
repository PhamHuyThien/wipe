import AddFriends from "./contact/AddFriends";

function Contacts() {
    return (
        <div className="tab-pane fade" id="members">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i className="material-icons">person_add</i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterMembersBtn active show" data-toggle="list" data-filter="all">All</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
            </div>
            <div className="contacts">
                <h1>Contacts</h1>
                <div className="list-group" id="contacts" role="tablist">
                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                        <img className="avatar-md" src="assets/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Janette Dalton</h5>
                            <p>Sofia, Bulgaria</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                    <a href="#" className="filterMembers all offline contact" data-toggle="list">
                        <img className="avatar-md" src="assets/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar" />
                        <div className="status">
                            <i className="material-icons offline">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5>Mildred Bennett</h5>
                            <p>London, United Kingdom</p>
                        </div>
                        <div className="person-add">
                            <i className="material-icons">person</i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;