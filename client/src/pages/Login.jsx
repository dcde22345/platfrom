const Login = () => {
  return (
    <div class="vw-100 vh-100">
      <div class="row w-100 justify-content-center align-items-center h-100 w-100 p-5">
        <div class="col-md-4">
          <h1 class="text-center mb-4">登入</h1>
          <form id="loginForm">
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                required
              />
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-100 mt-5 p-2">
                送出
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
