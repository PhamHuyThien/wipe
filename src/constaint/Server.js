const API = "http://localhost:8080";
const Server = {
    API: API,
    API_REGISTER: API + "/api/v1/auth/register",
    API_LOGIN: API + "/api/v1/auth/login",
    API_SOCKET: API + "/ws",
    API_CHECK_TOKEN: API + "/api/v1/auth/check-token",
    API_SEARCH_FRIEND: API + "/api/v1/friends/search-friend",
    API_SEND_FRIEND: API + "/api/v1/friends/send-friend",
    API_LIST_FRIEND_REQUEST: API + "/api/v1/friends/list-friend-request",
    API_ACCEPT_FRIEND: API + "/api/v1/friends/accept-friend",
    API_UNFRIEND: API + "/api/v1/friends/unfriend",
    API_SEARCH_FRIEND_ACCEPT: API + "/api/v1/friends/search-friend-accept",
    API_CREATE_CONVERSATION: API + "/api/v1/messages/create-conversation"
}

export default Server;