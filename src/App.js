import { Route, Switch, BrowserRouter } from "react-router-dom";
import ChatForm from "./components/chat/ChatForm";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

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
        </BrowserRouter>
    );
}

export default App;
