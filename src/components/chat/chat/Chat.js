import MessageMe from "./MessageMe";
import MessageYou from "./MessageYou";

function Chat() {
    return (
        <div className="main">
            <div className="tab-content" id="nav-tabContent">
                {/* Start of Babble */}
                <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                    {/* Start of Chat */}
                    <div className="chat" id="chat1">
                        <div className="top">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <a href="#"><img className="avatar-md" src="assets/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" /></a>
                                        <div className="status">
                                            <i className="material-icons online">fiber_manual_record</i>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">Keith Morris</a></h5>
                                            <span>Active now</span>
                                        </div>
                                        <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-30">phone_in_talk</i></button>
                                        <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-36">videocam</i></button>
                                        <button className="btn d-md-block d-none"><i className="material-icons md-30">info</i></button>
                                        <div className="dropdown">
                                            <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons md-30">more_vert</i></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item connect" name={1}><i className="material-icons">phone_in_talk</i>Voice Call</button>
                                                <button className="dropdown-item connect" name={1}><i className="material-icons">videocam</i>Video Call</button>
                                                <hr />
                                                <button className="dropdown-item"><i className="material-icons">clear</i>Clear History</button>
                                                <button className="dropdown-item"><i className="material-icons">block</i>Block Contact</button>
                                                <button className="dropdown-item"><i className="material-icons">delete</i>Delete Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* empty */}
                        <div className="content"> 
                            <div className="container">
                                <div className="col-md-12">
                                    {/* <div className="no-messages">
                                        <i className="material-icons md-48">forum</i>
                                        <p>Loading....</p>
                                    </div> */}
                                    {/* <div className="date">
                                        <hr />
                                        <span>Yesterday</span>
                                        <hr />
                                    </div> */}
                                    <MessageMe content="aihihih" time="12h AM" attachments={[{fileName: "anh thien", fileAddress: "https://fb.com/", fileSize: "500kb", fileType: "Json"}]}></MessageMe>                                    
                                    <MessageYou avatar="" name="jony dang" content="aihihih" time="12h AM" attachments={[{fileName: "anh thien", fileAddress: "https://fb.com/", fileSize: "500kb", fileType: "Json"}]} ></MessageYou>                                    
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <form className="position-relative w-100">
                                        <textarea className="form-control" placeholder="Start typing for reply..." rows={1} defaultValue={""} />
                                        <button className="btn emoticons"><i className="material-icons">insert_emoticon</i></button>
                                        <button type="submit" className="btn send"><i className="material-icons">send</i></button>
                                    </form>
                                    <label>
                                        <input type="file" />
                                        <span className="btn attach d-sm-block d-none"><i className="material-icons">attach_file</i></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call" id="call1">
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="panel">
                                            <div className="participant">
                                                <img className="avatar-xxl" src="assets/img/avatars/avatar-female-5.jpg" alt="avatar" />
                                                <span>Connecting</span>
                                            </div>
                                            <div className="options">
                                                <button className="btn option"><i className="material-icons md-30">mic</i></button>
                                                <button className="btn option"><i className="material-icons md-30">videocam</i></button>
                                                <button className="btn option call-end"><i className="material-icons md-30">call_end</i></button>
                                                <button className="btn option"><i className="material-icons md-30">person_add</i></button>
                                                <button className="btn option"><i className="material-icons md-30">volume_up</i></button>
                                            </div>
                                            <button className="btn back" name={1}><i className="material-icons md-24">chat</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;