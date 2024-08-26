import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Register = () => {
    // 設定Ref
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    // 設定導航
    const navigate = useNavigate();

    // 處理UserInfo按鈕點擊
    const handleUserInfoClick = () => {
        // 獲取表單內容
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

		console.log("Email:", email);
		console.log("Username:", username);
		console.log("Password:", password);
		console.log("Confirm Password:", confirmPassword);
		
		// 檢查每個欄位是否已填寫
        if (!email || !username || !password || !confirmPassword) {
			alert("請確保所有欄位都已填寫！");
            return;
        }
		
        // 檢查密碼和確認密碼是否匹配
        if (password !== confirmPassword) {
			alert("密碼與確認密碼不符！");
            return;
        }

        // 導航至"/scale"
        navigate("/scale");
    };

    return (
        <div className="vw-100 vh-100">
            <div className="row justify-content-center align-items-center h-100">
                <div class="col-md-4">
                    <h1 class="text-center mb-4">註冊</h1>
                    <form id="registerForm">
                        <div className="mb-3">
                            <label className="form-label">電子郵件</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={emailRef}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">使用者名稱</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={usernameRef}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">密碼</label>
                            <input
                                type="password"
                                className="form-control"
                                ref={passwordRef}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">確認密碼</label>
                            <input
                                type="password"
                                className="form-control"
                                ref={confirmPasswordRef}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary w-100 mt-5 p-2"
                            onClick={handleUserInfoClick}
                        >
                            下一步
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
