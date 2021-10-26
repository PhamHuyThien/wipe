import axios from "axios";
import md5 from "md5";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import SockJS from "sockjs-client";
import webstomp from "webstomp-client";
import ChatForm from "./components/chat/ChatForm";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Server from "./constaint/Server";
import { loadingOpen } from "./redux/LoadingSlice";
import { socketCallbackDisconnect } from "./util/SocketCallback";
import SocketUtil from "./util/SocketUtil";

function Content() {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadingOpen(true));
        checkToken();
    });

    async function checkToken() {
        let token = localStorage.getItem("token");
        if (token != null) {
            let result = await axios.post(Server.API_CHECK_TOKEN, { token: token }).catch((err) => {
                return { data: err.response.data };
            });
            if (result.data.status) {
                let sockJs = new SockJS(Server.API_SOCKET);
                let stompSockJs = webstomp.over(sockJs);
                stompSockJs.connect({
                    "Authorization": "Bearer " + token
                }, connected => {
                    SocketUtil.socket = stompSockJs;
                    SocketUtil.connected = true;
                    SocketUtil.token = md5(result.data.data.username);
                    history.push("/chats");
                }, socketCallbackDisconnect);
            }
        }
        dispatch(loadingOpen(false));
    }
    return <div></div>;
}

function App() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login></Login>
                </Route>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
                <Route exact path="/register">
                    <Register></Register>
                </Route>
                <Route exact path="/chats">
                    <ChatForm></ChatForm>
                </Route>
            </Switch>
            <Content></Content>
        </BrowserRouter>
    );
}

export default App;
