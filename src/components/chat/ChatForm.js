import Chat from "./chat/Chat";
import Navigation from "./navi/Navigation";
import AddFriends from "./side/side-item/contact/AddFriends";
import CreateChats from "./side/side-item/discussion/CreateChats";
import Sidebar from "./side/Sidebar";

function ChatForm() {
    return (
        <div>
            <main>
                <div className="layout">
                    <Navigation></Navigation>
                    <Sidebar></Sidebar>
                    <AddFriends></AddFriends>
                    <CreateChats></CreateChats>
                    <Chat></Chat>
                </div>
            </main>
        </div>
    );
}

export default ChatForm;