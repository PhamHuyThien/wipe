import { useHistory } from "react-router";


function Login() {
    const history = useHistory();
    function onClickLoginHandler(){
        history.push("/chats");
    }
    function onClickRegisterHandler() {
        history.push("/register");
    }
    return (
        <div>
            <main>
                <div className="layout">
                    {/* Start of Sign In */}
                    <div className="main order-md-1">
                        <div className="start">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="content">
                                        <h1>Sign in to Swipe</h1>
                                        <div className="third-party">
                                            <button className="btn item bg-blue">
                                                <i className="material-icons">pages</i>
                                            </button>
                                            <button className="btn item bg-teal">
                                                <i className="material-icons">party_mode</i>
                                            </button>
                                            <button className="btn item bg-purple">
                                                <i className="material-icons">whatshot</i>
                                            </button>
                                        </div>
                                        <p>or use your email account:</p>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
                                                <button className="btn icon"><i className="material-icons">mail_outline</i></button>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                                <button className="btn icon"><i className="material-icons">lock_outline</i></button>
                                            </div>
                                            <button type="submit" className="btn button" formAction="#" onClick={onClickLoginHandler}>Sign In</button>
                                            <div className="callout">
                                                <span>Don't have account? <a href="#" onClick={onClickRegisterHandler}>Create Account</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Sign In */}
                    {/* Start of Sidebar */}
                    <div className="aside order-md-2">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="preference">
                                    <h2>Hello, Friend!</h2>
                                    <p>Enter your personal details and start your journey with Swipe today.</p>
                                    <a href="#" className="btn button" onClick={onClickRegisterHandler}>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Layout */}
            </main>
        </div>
    );
}

export default Login;