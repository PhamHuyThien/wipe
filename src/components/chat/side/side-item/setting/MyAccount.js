import { useSelector } from "react-redux";

function MyAccount() {
    const avatar = useSelector((state) => state.userInfo.userInfo.profile.avatar.url);
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
                            <img className="avatar-xl" src={avatar} alt="image" />
                            <label>
                                <input type="file" />
                                <span className="btn button">Tải hình ảnh lên</span>
                            </label>
                        </div>
                        <p>Để có kết quả tốt nhất, hãy sử dụng hình ảnh ít nhất 256px x 256px ở định dạng .jpg hoặc .png!</p>
                    </div>
                    <form>
                        <div className="parent">
                            <div className="field">
                                <label htmlFor="firstName">Tên <span>*</span></label>
                                <input type="text" className="form-control" id="firstName" placeholder="First name" required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">Họ <span>*</span></label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last name" required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter a new password" required />
                        </div>
                        <div className="field">
                            <label htmlFor="location">Địa chỉ</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter your location" required />
                        </div>
                        <button className="btn btn-link w-100">Xóa tài khoản</button>
                        <button type="submit" className="btn button w-100">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;