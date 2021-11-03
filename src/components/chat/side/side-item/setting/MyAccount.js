import axios from "axios";
import { useEffect } from "react";
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
    const { register, handleSubmit, setValue, reset } = useForm();
    useEffect(() => {
        reset({
            firstName: userInfo.profile.firstName,
            lastName: userInfo.profile.lastName,
            email: userInfo.email,
            address: userInfo.profile.address,
        });
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
    return (
        <div className="category">
            <a href="#" className="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i className="material-icons md-30 online">person_outline</i>
                <div className="data">
                    <h5>Quản lý tài khoản</h5>
                    <p>Thay đổi thông tin tài khoản</p>
                </div>
                <i className="material-icons">keyboard_arrow_right</i>
            </a>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
                <div className="content">
                    <div className="upload">
                        <div className="data">
                            <img className="avatar-xl" src={userInfo.profile.avatar.url} alt="image" />
                            <label>
                                <input type="file" />
                                <span className="btn button">Đổi ảnh đại diện</span>
                            </label>
                        </div>
                        <p>Để có kết quả tốt nhất, hãy sử dụng hình ảnh ít nhất 256px x 256px ở định dạng .jpg hoặc .png!</p>
                    </div>
                    <form>
                        <div className="parent">
                            <div className="field">
                                <label htmlFor="firstName">Tên <span>*</span></label>
                                <input type="text" {...register("firstName")} className="form-control" id="firstName" placeholder="Tên" required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">Họ <span>*</span></label>
                                <input type="text" {...register("lastName")} className="form-control" id="lastName" placeholder="Họ" required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" {...register("email")} className="form-control" id="email" placeholder="Địa chỉ email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="location">Địa chỉ</label>
                            <input type="text" {...register("address")} className="form-control" id="location" placeholder="" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" {...register("password")} className="form-control" id="password" placeholder="" required />
                        </div>
                        <input type="hidden" {...register("image")} />
                        <button className="btn btn-link w-100">Xóa tài khoản</button>
                        <button type="submit" className="btn button w-100" onClick={handleSubmit(onclickUpdateProfileHandle)}>Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;