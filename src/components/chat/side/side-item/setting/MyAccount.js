import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Server from "../../../../../constaint/Server";
import { loadingOpen } from "../../../../../redux/LoadingSlice";
import SocketUtil from "../../../../../util/SocketUtil";
import Toast from "../../../../../util/Toast";

function MyAccount() {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo.userInfo);
    const [avt, setAvt] = useState("");
    const { register, handleSubmit, setValue, reset } = useForm();
    useEffect(() => {
        reset({
            firstName: userInfo.profile.firstName,
            lastName: userInfo.profile.lastName,
            email: userInfo.email,
            address: userInfo.profile.address,
        });
        setAvt(userInfo.profile.avatar.url);
    }, [userInfo]);
    async function onclickUpdateProfileHandle(forms) {
        dispatch(loadingOpen(true));
        let result = await axios.post(Server.API_UPDATE_PROFILE, forms, {
            headers: { "Authorization": "Bearer " + token }
        }).catch(function (err) {
            return { data: err.response.data };
        });
        if (result.data.status === true) {
            SocketUtil.socket.send(`/app/${SocketUtil.token}/user-info`);

        }
        Toast.fire({
            icon: result.data.status ? "success" : "error",
            title: result.data.message
        }).then(function(){
            if(forms.password.trim().length !== 0){
                if (SocketUtil.socket != null) {
                    SocketUtil.socket.disconnect();
                }
                localStorage.removeItem("token");
                window.location.href = "/";
            }
        });
        dispatch(loadingOpen(false));
    }

    async function onChangeFileUploadHandle(evt){
        dispatch(loadingOpen(true));
        let file = evt.target.files[0];
        if(file != null){
            let formData = new FormData();
            formData.append("file", file);
            let result = await axios.post(Server.API_UPLOAD_FILE, formData, {
                headers: { "Authorization": "Bearer " + token }
            }).catch(function (err) {
                return { data: err.response.data };
            });
            if(result.data.status){
                setAvt(Server.API+result.data.data.path);
                setValue("image", Server.API+result.data.data.path);
            }
        }
        dispatch(loadingOpen(false));
    }

    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i className="material-icons md-30 online">person_outline</i>
                <div className="data">
                    <h5>Qu???n l?? t??i kho???n</h5>
                    <p>Thay ?????i th??ng tin t??i kho???n</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
                <div className="content">
                    <div className="upload">
                        <div className="data">
                            <img className="avatar-xl" src={avt} alt="image" style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "100%", marginLeft: "10px", position: "relative", top: "-15px" }}/>
                            <label>
                                <input type="file" onChange={onChangeFileUploadHandle} accept="image/*"/>
                                <span className="btn button">?????i ???nh ?????i di???n</span>
                            </label>
                        </div>
                        <p>????? c?? k???t qu??? t???t nh???t, h??y s??? d???ng h??nh ???nh ??t nh???t 256px x 256px ??? ?????nh d???ng .jpg ho???c .png!</p>
                    </div>
                    <form>
                        <div className="parent">
                            <div className="field">
                                <label htmlFor="firstName">T??n <span>*</span></label>
                                <input type="text" {...register("firstName")} className="form-control" id="firstName" placeholder="T??n" required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">H??? <span>*</span></label>
                                <input type="text" {...register("lastName")} className="form-control" id="lastName" placeholder="H???" required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" {...register("email")} className="form-control" id="email" placeholder="?????a ch??? email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="location">?????a ch???</label>
                            <input type="text" {...register("address")} className="form-control" id="location" placeholder="" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">M???t kh???u</label>
                            <input type="password" {...register("password")} className="form-control" id="password" placeholder="" required />
                        </div>
                        <input type="hidden" {...register("image")} />
                        <button className="btn btn-link w-100">X??a t??i kho???n</button>
                        <button type="submit" className="btn button w-100" onClick={handleSubmit(onclickUpdateProfileHandle)}>C???p nh???t</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;