import ListFriend from "./contact/ListFriend";
import ListFriendRequest from "./contact/ListFriendRequest";

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
                    <ListFriendRequest></ListFriendRequest>
                    {/* <ListFriend></ListFriend> */}
                </div>
            </div>
        </div>
    );
}

export default Contacts;