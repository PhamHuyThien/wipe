import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function SocketCallback(data) {
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    // let json = JSON.parse(data);
    // switch (json.type) {
    //     case "USER_INFO":
    //         console.log(userInfo);
    //         console.log(dispatch);
    //         break;
    //     default:
    //         break;
    // }
    return <div></div>;
}

function socketCallbackDisconnect(event) {
    if (event.code === 1001) {
        localStorage.removeItem("token", null);
        window.location.href = "/";
    }
}
export { socketCallbackDisconnect };
export default SocketCallback;