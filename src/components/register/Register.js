import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import Server from "../../constaint/Server";
import Toast from "../../util/Toast";
import { useDispatch } from "react-redux";
import { loadingAuto, loadingOpen } from "../../redux/LoadingSlice";

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    function onSubmitForm(forms) {
        registerHandler(forms);
    }

    async function registerHandler(form = { username: "", password: "", email: "" }) {
        dispatch(loadingOpen(true));
        let result = await axios.post(Server.API_REGISTER, form).catch(function (err) {
            return { data: err.response.data };
        });
        dispatch(loadingOpen(false));
        Toast.fire({
            icon: result.data.status === true ? 'success' : 'error',
            title: result.data.message
        }).then(function () {
            if (result.data.status === true) {
                dispatch(loadingAuto(1000));
                history.push("/login");
            }
        });
    }

    function onClickLoginHandler() {
        history.push("/login");
    }
    return (
        <div>
            <main>
                <div className="layout">
                    <div className="main order-md-2">
                        <div className="start">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="content">
                                        <h1>Create Account</h1>
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
                                        <p>or use your email for registration:</p>
                                        <form className="signup" onSubmit={handleSubmit(onSubmitForm)}>
                                            <div className="form-parent">
                                                <div className="form-group">
                                                    <input type="text" {...register("username")} className="form-control" placeholder="Username" required />
                                                    <button className="btn icon"><i className="material-icons">person_outline</i></button>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" {...register("email")} className="form-control" placeholder="Email Address" required />
                                                    <button className="btn icon"><i className="material-icons">mail_outline</i></button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" {...register("password")} className="form-control" placeholder="Password" required />
                                                <button className="btn icon"><i className="material-icons">lock_outline</i></button>
                                            </div>
                                            <button type="submit" className="btn button" formAction="#">Sign Up</button>
                                            <div className="callout">
                                                <span>Already a member? <button>Sign In</button></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aside order-md-1">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="preference">
                                    <h2>Welcome Back!</h2>
                                    <p>To keep connected with your friends please login with your personal info.</p>
                                    <button href="#" className="btn button" onClick={onClickLoginHandler}>Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>);
}


export default Register;