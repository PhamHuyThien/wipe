import { debounce } from "lodash";
import { useSelector } from "react-redux";
import Conversation from "./discussion/Conversation";


function Discussions() {
    const listConversation = useSelector(state => state.listConversation.list);

    function onKeyDownSearchConversationHandle(evt){
        let value = evt.target.value;
    }
    return (
        <div id="discussions" className="tab-pane fade active show">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="conversations" placeholder="Tìm kiếm cuộc trò chuyện" onKeyDown={debounce(onKeyDownSearchConversationHandle, 1000)} />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i className="material-icons">create</i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">Tất cả</button>
                <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Đã xem</button>
                <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Chưa xem</button>
            </div>
            <div className="discussions">
                <h1>Cuộc trò chuyện</h1>
                <div className="list-group" id="chats" role="tablist">
                    {listConversation.map((conversation, id) => <Conversation conversation={conversation} key={id}></Conversation>)}
                </div>
            </div>
        </div>
    );
}

export default Discussions;